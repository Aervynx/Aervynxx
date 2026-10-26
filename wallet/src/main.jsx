import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { createRoot } from 'react-dom/client';
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultConfig,
  RainbowKitProvider,
  ConnectButton,
  darkTheme,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider, useDisconnect } from 'wagmi';
import './disconnect-modal.css';
import { mainnet, polygon, base, arbitrum, bsc } from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const config = getDefaultConfig({
  appName: 'Aervnyx',
  projectId: 'YOUR_PROJECT_ID',
  chains: [bsc, polygon, mainnet, base, arbitrum],
});

const queryClient = new QueryClient();

const WalletIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
       strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 7a2 2 0 0 1 2-2h13a1 1 0 0 1 1 1v2" />
    <path d="M3 7v11a2 2 0 0 0 2 2h14a1 1 0 0 0 1-1v-3" />
    <path d="M21 10h-5a2 2 0 0 0 0 4h5z" />
  </svg>
);


const LogoutIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
       strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <path d="M16 17l5-5-5-5" />
    <path d="M21 12H9" />
  </svg>
);

const CopyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
       strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="9" y="9" width="12" height="12" rx="2" />
    <path d="M5 15V5a2 2 0 0 1 2-2h10" />
  </svg>
);

function DisconnectModal({ address, displayName, onClose, onDisconnect }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {}
  };

  return createPortal(
    <div className="dm-backdrop" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="dm-card" role="dialog" aria-modal="true" aria-labelledby="dm-title">
        <div className="dm-icon"><LogoutIcon /></div>
        <h3 className="dm-title" id="dm-title">Disconnect Wallet</h3>
        <p className="dm-text">
          Are you sure you want to disconnect your wallet? You can always reconnect anytime.
        </p>
        <button type="button" className="dm-addr" onClick={copy} title="Copy address">
          <span>{copied ? 'Copied!' : displayName}</span><CopyIcon />
        </button>
        <div className="dm-actions">
          <button type="button" className="dm-btn dm-btn--cancel" onClick={onClose}>Cancel</button>
          <button type="button" className="dm-btn dm-btn--danger" onClick={onDisconnect}>Disconnect</button>
        </div>
      </div>
    </div>,
    document.body
  );
}

function WalletButton() {
  const { disconnect } = useDisconnect();
  const [open, setOpen] = useState(false);
  return (
    <ConnectButton.Custom>
      {({ account, chain, openChainModal, openConnectModal, mounted }) => {
        const connected = mounted && account && chain;
        return (
          <div style={{ display: 'contents', opacity: mounted ? 1 : 0 }}>
            {!connected ? (
              <button className="btn btn--wallet" type="button" onClick={openConnectModal}>
                <WalletIcon /><span>Connect Wallet</span>
              </button>
            ) : chain.unsupported ? (
              <button className="btn btn--wallet" type="button" onClick={openChainModal}>
                <span>Wrong network</span>
              </button>
            ) : (
              <button className="btn btn--wallet" type="button" onClick={() => setOpen(true)}>
                <WalletIcon /><span>{account.displayName}</span>
              </button>
            )}
            {open && connected && (
              <DisconnectModal
                address={account.address}
                displayName={account.displayName}
                onClose={() => setOpen(false)}
                onDisconnect={() => { disconnect(); setOpen(false); }}
              />
            )}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
}

const el = document.getElementById('wallet-root');
if (el) {
  createRoot(el).render(
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={darkTheme({ accentColor: '#EC5800', borderRadius: 'medium' })}>
          <WalletButton />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
