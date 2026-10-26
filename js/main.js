/* =====================================================
   AERVNYX — main.js
   1 Image config · 2 Content config · 3 Icons · 4 Render ·
   5 Ecosystem diagram · 6 Navigation · 7 Scroll reveals ·
   8 Interactions · 9 Forms · 10 Init
===================================================== */

/* =====================================================
   AERVNYX IMAGE CONFIGURATION — EDIT IMAGE LINKS HERE

   Replace each path with your own hosted image or a file in /assets.
   Keep the property names. A missing or empty image shows the
   built-in illustrated fallback — nothing breaks.
===================================================== */

  const AERVNYX_ASSETS = {
  heroBackground:    "assets/hero7-city-drone.png",    // HERO: skyline + drone + autonomous vehicle (wide, 2400×1350)
  tokenizedDrones:   "assets/tokenized-drones3.png",   // CARD 1: delivery drone (16:10, 1200×750)
  tokenizedVehicles: "assets/tokenized-vehicles3.png", // CARD 2: premium vehicle (16:10, 1200×750)
  zeroVault:         "assets/zerovault4.png",          // CARD 3: digital treasury vault (16:10, 1200×750)
  escrowDelivery:    "assets/escrow-delivery4.PNG",    // CARD 4: parcel / verification interface (16:10, 1200×750)
  nftAviation:       "assets/nft-aviation.PNG",        // CARD 5: NFT airline tickets & BNPL aviation (16:10, 1200×750)
  cryptoBankCard:    "assets/escrow-delivery3.PNG",    // CARD 6: direct wallet-to-POS bank card (16:10, 1200×750)
  nftMarketplace:    "assets/nft-marketplace.png",     // CARD 7: NFT marketplace & installment tier NFTs (16:10, 1200×750)
  droneArcade:       "assets/drone-arcade.PNG",        // CARD 8: 2D drone fighter arcade game (16:10, 1200×750)
  howItWorks:        "assets/how-it-works.webp",       // HOW IT WORKS: animated drone (1400×876, transparent)
  ecosystemGlobe:    "assets/ecosystem-globe.webp",    // ECOSYSTEM: optional faint globe behind the layer diagram (square, 1200×1200)
  finalCTA:          "assets/final-cta.webp"           // FINAL CTA: cinematic city / infrastructure (wide, 2400×1200)
};

/* =====================================================
   EDITABLE CONTENT & SETTINGS
===================================================== */
const CONFIG = {
  motion: { speed: 1 },    // animation speed: 1 normal · 2 twice as slow · 0.5 twice as fast
  newsletterEndpoint: "",  // optional URL accepting POST {"email": "..."}; empty = demo mode (nothing is stored)
  // TEAM
  team: [
    { img: "assets/IMG_TEAM.PNG", name: "Alex Mercer", role: "Lead Systems Architect", text: "Expert in EAL6+ secure enclaves, zero-knowledge architecture, and physical hardware security.", social: "#" },
    { img: "", name: "Elena Rostova", role: "Head of Smart Contracts", text: "Pioneering ERC-4337 Account Abstraction and Paymaster logic on the DotOne Smart Chain.", social: "#" },
    { img: "", name: "Marcus Vance", role: "Director of Logistics", text: "Bridging physical drone networks with on-chain DeliveryEscrow and NFC verification.", social: "#" },
    { img: "", name: "Dr. Sarah Lin", role: "Cryptographic Engineer", text: "Specializes in seedless Shamir's Secret Sharing and advanced zk-DID identity protocols.", social: "#" },
    { img: "", name: "Julian Drake", role: "Product VP (Hardware)", text: "Overseeing the physical manufacturing and flawless NFC integration of the AERVYNX.One Card.", social: "#" },
    { img: "", name: "Nadia Kael", role: "Global Compliance Head", text: "Navigating international BaaS integrations and localized fiat-collateralized credit lines.", social: "#" }
  ],
  // NAVIGATION: [label, target]
 
  nav: [["Home", "#home"], ["Products", "#products"], ["Technology", "#technology"], ["Roadmap", "#roadmap"], ["Team", "#team"], ["Whitepaper", "whitepaper.html"], ["About", "#about"], ["Pitch Deck", "#pitchdeck"]],
  roadmap: [
    { icon: "flag", title: "Genesis & Architecture", time: "Phase 1 - 3 Months", text: "Initial ecosystem setup, conceptual design, and core infrastructure development." },
    { icon: "rocket", title: "Testnet Launch", time: "Phase 2 - 6 Months", text: "Beta release of ZeroVault, smart contract deployment, and initial security audits." },
    { icon: "globe", title: "Global Expansion", time: "Phase 3 - 4 Months", text: "Global market entry, real-world asset integration, and scaling the drone fleet." },
    { icon: "card", title: "Direct POS Card & BNPL NFTs", time: "Phase 4 - 5 Months", text: "Launch of the direct wallet-to-POS bank card, NFT airline ticketing with installment tiers, and the 2D Drone Arcade." },
    { icon: "shield", title: "Full Autonomy", time: "Phase 5 - Ongoing", text: "Complete decentralization, DAO governance activation, and autonomous operations." }
  ],

 // PRODUCT CARDS (8 cards across 2 rows of 4)
  products: [
    { asset: "tokenizedDrones", icon: "drone", label: "Aerial logistics", title: "Tokenized Drones", href: "#ecosystem",
      text: "Explore legally structured participation in drone-fleet economics, subject to the applicable terms." },
    { asset: "tokenizedVehicles", icon: "car", label: "Mobility assets", title: "Tokenized Vehicles", href: "#ecosystem",
      text: "Discover tokenization models that may represent contractual rights or interests in dedicated vehicle entities." },
    { asset: "zeroVault", icon: "vault", label: "Treasury security", title: "ZeroVault", href: "#technology",
      text: "Explore modular treasury security, role-based access, timelocks, emergency pausing, and controlled execution." },
    { asset: "escrowDelivery", icon: "box", label: "Verified delivery", title: "Escrow & Delivery", href: "#technology",
      text: "Explore escrow workflows designed to release funds according to defined conditions and authenticated evidence." },
    { asset: "nftAviation", icon: "plane", label: "Web3 aviation", title: "NFT Flight Tickets", href: "#ecosystem",
      text: "Book airline tickets minted as on-chain NFTs. Unlock native token discounts and installment payments by holding eligible tier NFTs." },
    { asset: "cryptoBankCard", icon: "card", label: "Instant POS settlement", title: "Direct Wallet Card", href: "#technology",
      text: "Spend the real-time fiat value of your tokens at physical POS terminals via a bank card wired directly to your Web3 wallet." },
    { asset: "nftMarketplace", icon: "market", label: "Utility & BNPL NFTs", title: "NFT Marketplace", href: "#ecosystem",
      text: "Trade ecosystem assets and exclusive Credit-Tier NFTs that grant wallet holders instant buy-now-pay-later installment privileges." },
    { asset: "droneArcade", icon: "gamepad", label: "Play-to-earn arcade", title: "2D Drone Arcade", href: "#ecosystem",
      text: "Pilot combat drones in a classic 2D aerial shooter. Score points to unlock store discount vouchers and exclusive reward NFTs." }
  ],

  // METRICS STRIP — labels only. Add value:"…" text only for real, verified figures.
  metrics: [
    { icon: "box", label: "Real-World Assets", value: "In Development" },
    { icon: "layers", label: "Ecosystem Products", value: "Platform Capabilities" },
    { icon: "globe", label: "Global Reach", value: "Ecosystem Scope" },
    { icon: "users", label: "Community", value: "Explore the Vision" }
  ],

  // ECOSYSTEM LAYERS (top → bottom): t = title, s = subtitle, x = hover explanation
  layers: [
    { icon: "logo", t: "Application Layer", s: "Products & Services", x: "Interfaces for discovery, participation, and tracking." },
    { icon: "car", t: "Asset Layer", s: "Vehicles & Drones", x: "Real-world assets and the entities designed to hold them." },
    { icon: "link", t: "Blockchain Layer", s: "Tokenization & Transparency", x: "Digital representation and transparent on-chain records." },
    { icon: "db", t: "Infrastructure Layer", s: "Settlement & Storage", x: "Settlement rails, custody, and data storage." }
  ],
  features: [
    { icon: "shield", t: "ZeroVault", s: "Treasury Security and Execution Controls" },
    { icon: "box", t: "Tokenization", s: "Digital Representation of Eligible Assets" },
    { icon: "chart", t: "Profit Distribution", s: "Defined and Transparent Distribution Workflows" },
    { icon: "store", t: "Marketplace", s: "Discovery and Participation" }
  ],

  // TECHNOLOGY MODULES (first and last render wider on desktop)
  tech: [
    { icon: "key", t: "Role-Based Access Control", s: "Permissions scoped to clearly defined roles." },
    { icon: "clock", t: "Timelock Operations", s: "Delay windows that allow review before sensitive actions execute." },
    { icon: "pause", t: "Emergency Pause", s: "Mechanisms designed to halt activity quickly when needed." },
    { icon: "exec", t: "Controlled Execution", s: "Transactions run within predefined limits and conditions." },
    { icon: "ledger", t: "Transparent On-Chain Records", s: "Activity designed to be verifiable on public ledgers." },
    { icon: "lock", t: "Escrow Conditions", s: "Funds released only when defined conditions are met." },
    { icon: "verify", t: "Physical-to-Digital Verification", s: "Workflows that link authenticated real-world evidence to on-chain state." }
  ],

  // HOW IT WORKS
  steps: [
    { icon: "search", t: "Discover an Asset", s: "Explore an available asset or ecosystem product." },
    { icon: "doc", t: "Review Its Structure", s: "Understand the applicable legal rights, contractual terms, eligibility, and risks." },
    { icon: "wallet", t: "Participate", s: "Follow the supported process for the relevant product." },
    { icon: "chart", t: "Track Activity", s: "Review available transactions, operational information, and distributions where applicable." }
  ],

  // FOOTER LINKS: "#" = placeholder, replace with real pages
  footer: [
    ["Products", [["Tokenized Drones", "#products"], ["Tokenized Vehicles", "#products"], ["ZeroVault", "#technology"], ["Escrow & Delivery", "#products"]]],
    ["Company", [["About", "#about"], ["Careers", "#"], ["Blog", "#"], ["Contact", "#"]]],
    ["Resources", [["Documentation", "#"], ["Technology", "#technology"], ["Ecosystem", "#ecosystem"], ["FAQ", "#"]]],
    ["Legal", [["Terms of Service", "#"], ["Privacy Policy", "#"], ["Risk Disclosure", "#"]]]
  ],
  // SOCIAL: [name, short label, URL] — empty URL renders a disabled placeholder
  social: [["LinkedIn", "in", ""], ["X", "X", ""], ["Discord", "Dc", ""], ["YouTube", "Yt", ""]]
};

/* ---------- ICONS (24×24 line paths) ---------- */
const ICON = {
  arrow: "M5 12h14M13 6l6 6-6 6", exec: "M4 12h12M12 6l6 6-6 6M20 5v14",
  drone: "M7 7l10 10M17 7 7 17M4 6h6M14 6h6M4 18h6M14 18h6",
  car: "M3 16v-4l2-5h14l2 5v4M3 16h18M3 16v3h3v-3M18 16v3h3v-3M7 12h10",
  vault: "M4 4h16v14H4zM8 18v2M16 18v2M15 11a3 3 0 11-6 0 3 3 0 016 0zM12 8v1M12 13v1",
  box: "M12 3l8 4.5v9L12 21l-8-4.5v-9zM4 7.5l8 4.5 8-4.5M12 12v9",
  layers: "M12 3l9 5-9 5-9-5zM3 13l9 5 9-5",
  globe: "M21 12a9 9 0 11-18 0 9 9 0 0118 0zM3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18",
  users: "M9 11a3 3 0 100-6 3 3 0 000 6zM3 20v-1a5 5 0 0110 0v1M16 5.5a3 3 0 010 5.5M18 20v-1a5 5 0 00-3-4.5",
  link: "M10 14a4 4 0 005.7 0l3-3a4 4 0 00-5.7-5.7l-1 1M14 10a4 4 0 00-5.7 0l-3 3a4 4 0 005.7 5.7l1-1",
  db: "M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zM4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3",
  shield: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6zM9 12l2 2 4-4",
  chart: "M4 20h16M7 16v-4M12 16V8M17 16v-7",
  store: "M4 9l1-5h14l1 5M4 9v11h16V9M4 9a2.7 3 0 005.3 0 2.7 3 0 005.4 0A2.7 3 0 0020 9M10 20v-5h4v5",
  key: "M14 10a4 4 0 11-8 0 4 4 0 018 0zM13 13l7 7M17 17l2-2",
  clock: "M21 12a9 9 0 11-18 0 9 9 0 0118 0zM12 7v5l3 2",
  pause: "M21 12a9 9 0 11-18 0 9 9 0 0118 0zM10 9v6M14 9v6",
  ledger: "M6 3h12v18H6zM9 8h6M9 12h6M9 16h4",
  lock: "M6 11h12v9H6zM8 11V8a4 4 0 018 0v3M12 15v2",
  verify: "M3 7l4-4 4 4M7 3v9M21 17l-4 4-4-4M17 21v-9",
  search: "M11 18a7 7 0 100-14 7 7 0 000 14zM21 21l-5-5",
  doc: "M7 3h8l4 4v14H7zM15 3v4h4M10 12h6M10 16h6",
  wallet: "M4 7h15a1 1 0 011 1v11H5a1 1 0 01-1-1zM4 7l12-3v3M16 13h2",
  logo: "M4 20L12 4l8 16h-4l-4-9-4 9z",
  flag: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7",
  plane: "M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",
  card: "M3 5h18a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V7a2 2 0 012-2zM1 10h22M6 15h4M14 15h2",
  market: "M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0",
  gamepad: "M6 12h4M8 10v4M15 13h.01M18 11h.01M17.32 5H6.68a4 4 0 00-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 003 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 019.828 16h4.344a2 2 0 011.414.586L17 18c.5.5 1 1 2 1a3 3 0 003-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0017.32 5z",
  rocket: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2l.5-.5m5.5-8.5l-2-2m-5.5 8.5l-2-2m10.5-5.5a8.9 8.9 0 00-6.4 2.5l-4.2 4.2c-1.1 1.1-1.1 2.9 0 4l2.1 2.1c1.1 1.1 2.9 1.1 4 0l4.2-4.2a8.9 8.9 0 002.5-6.4V4h-3.7z",
};

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const svg = (n, c = "i") => `<svg class="${c}" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="${ICON[n]}"/></svg>`;

/* ---------- RENDER: builds sections from CONFIG ---------- */
function render() {
  const C = CONFIG;
  $("#links").innerHTML = C.nav.map(([t, h]) => `<li><a class="l" href="${h}">${t}</a></li>`).join("");
  $("#cards").innerHTML = C.products.map((p, k) =>
    `<a class="card rv" style="--k:${k}" href="${p.href}"><div class="card__vis" data-asset="${p.asset}" data-alt="${p.title} visual">${svg(p.icon)}</div><div class="card__body"><small>${p.label}</small><h3>${p.title}</h3><p>${p.text}</p><span class="card__go">Learn more ${svg("arrow")}</span></div></a>`).join("");
  $("#metrics").innerHTML = C.metrics.map((m, k) =>
    `<div class="m rv" style="--k:${k}">${svg(m.icon)}<div><b>${m.label}</b><span>${m.value}</span></div></div>`).join("") +
    `<a class="m__more rv" style="--k:4" href="#ecosystem"><span>More than assets.<br>A movement.</span>${svg("arrow")}</a>`;
  $("#feat").innerHTML = C.features.map(f =>
    `<li><a href="#technology"><span class="ic">${svg(f.icon)}</span><span><b>${f.t}</b><small>${f.s}</small></span>${svg("arrow")}</a></li>`).join("");
  $("#tech").innerHTML = C.tech.map((t, k) =>
    `<article class="rv" style="--k:${k % 3}">${svg(t.icon)}<h3>${t.t}</h3><p>${t.s}</p></article>`).join("");
  $("#steps").innerHTML = C.steps.map((s, k) =>
    `<li class="step" style="--k:${k}"><div class="step__top"><span class="step__n">0${k + 1}</span>${svg(s.icon)}</div><h3>${s.t}</h3><p>${s.s}</p></li>`).join("");
  $("#fgroups").innerHTML = C.footer.map(([t, l]) =>
    `<div><h3>${t}</h3><ul>${l.map(([n, h]) => `<li><a href="${h}">${n}</a></li>`).join("")}</ul></div>`).join("");
  $("#soc").innerHTML = C.social.map(([n, a, u]) => u
    ? `<a href="${u}" target="_blank" rel="noopener" aria-label="${n}">${a}</a>`
    : `<span class="off" role="img" aria-label="${n} (not configured)" title="Add the ${n} URL in CONFIG.social">${a}</span>`).join("");
  $("#yr").textContent = new Date().getFullYear();
  const rmC = $("#rm-container");
  if (rmC) {
    rmC.innerHTML = C.roadmap.map((r, k) => `
      <div class="rm__item rv" style="--k:${k}">
        <div class="rm__content">
          <span class="rm__time">${r.time}</span>
          <h3>${r.title}</h3>
          <p>${r.text}</p>
        </div>
        <div class="rm__node" aria-hidden="true">${svg(r.icon)}</div>
        <div class="rm__empty"></div>
      </div>
    `).join("");
  }
  const teamGrid = $("#team-grid");
  if (teamGrid) {
    teamGrid.innerHTML = C.team.map((t, k) => `
      <div class="team__card rv" style="--k:${k}">
        <div class="team__pic">
          <div class="team__pic-ring"></div>
          <div class="team__pic-inner">
            ${t.img ? `<img src="${t.img}" alt="${t.name}">` : svg("users")}
          </div>
        </div>
        <div class="team__info">
          <h3>${t.name}</h3>
          <span>${t.role}</span>
          <p>${t.text}</p>
        </div>
        <a href="${t.social}" class="team__social" aria-label="${t.name} Social Link">${svg("link")}</a>
      </div>
    `).join("");
  }
}

/* ---------- ECOSYSTEM DIAGRAM: stacked isometric layers (SVG) ---------- */
function diagram() {
  const L = CONFIG.layers, W = 420, H = 400, cx = 170, hw = 140, hh = 44;
  let s = `<svg viewBox="0 0 ${W} ${H}" aria-hidden="true" focusable="false">`;
  for (let i = L.length - 1; i >= 0; i--) { // draw bottom first so upper layers overlap
    const cy = 50 + i * 100;
    s += `<g class="layer" data-l="${i}" style="--k:${L.length - 1 - i}"><path class="side" d="M${cx - hw} ${cy}v10l${hw} ${hh}l${hw} -${hh}v-10l-${hw} ${hh}z"/><polygon points="${cx},${cy - hh} ${cx + hw},${cy} ${cx},${cy + hh} ${cx - hw},${cy}"/><path class="lic" transform="translate(${cx - 14} ${cy - 14}) scale(1.17)" d="${ICON[L[i].icon]}"/></g>`;
  }
  for (let i = 0; i < L.length; i++) { // connector lines to the labels
    const cy = 50 + i * 100;
    s += `<path class="cn" pathLength="100" style="--k:${i}" d="M${cx + hw} ${cy}H${W - 6}"/><circle class="dt" cx="${W - 6}" cy="${cy}" r="3"/>`;
  }
  $("#dia").insertAdjacentHTML("beforeend", s + "</svg><ol class=\"dl\">" +
    L.map((l, i) => `<li data-l="${i}" tabindex="0"><b>${l.t}</b><span>${l.s}</span><p class="ex">${l.x}</p></li>`).join("") + "</ol>");
}
function bindLayers() { // hover/focus on a layer or its label highlights both
  const box = $("#dia"), set = (i, v) => $$(`[data-l="${i}"]`, box).forEach(e => e.classList.toggle("on", v));
  $$(".layer,.dl li", box).forEach(e => {
    ["mouseenter", "focus"].forEach(t => e.addEventListener(t, () => set(e.dataset.l, true)));
    ["mouseleave", "blur"].forEach(t => e.addEventListener(t, () => set(e.dataset.l, false)));
  });
}

/* ---------- HERO SCENE: deterministic skyline (fallback when no hero image) ---------- */
function skyline() {
  const g = $("#sky"); if (!g) return;
  let s = 7, o = ""; const r = () => (s = (s * 16807) % 2147483647) / 2147483647;
  [["acc", 160, 340, 34], ["bg", 90, 250, 46]].forEach(([k, lo, hi, w0]) => {
    for (let x = 520; x < 1460;) {
      const w = w0 + r() * 40, h = lo + r() * (hi - lo), a = `x="${x | 0}" y="${(700 - h) | 0}" width="${w | 0}" height="${h | 0}"`;
      o += k === "acc" ? `<rect ${a} fill="currentColor" fill-opacity=".13"/>` : `<rect class="bgf" ${a} fill-opacity=".92"/>`;
      x += w * (.55 + r() * .5);
    }
  });
  g.innerHTML = o;
}

/* ---------- IMAGES: loads AERVNYX_ASSETS into every [data-asset] box ---------- */
function loadAssets() {
  $$("[data-asset]").forEach(box => {
    const src = AERVNYX_ASSETS[box.dataset.asset]; if (!src) return;
    const im = document.createElement("img"), eager = box.hasAttribute("data-eager");
    im.alt = box.dataset.alt || ""; im.decoding = "async"; im.loading = eager ? "eager" : "lazy";
    if (eager) im.fetchPriority = "high"; // hero image is never lazy-loaded
    im.onload = () => box.closest(".hero")?.classList.add("has-img"); // hides the SVG fallback scene
    im.onerror = () => im.remove();                            // missing file → fallback stays
    im.src = src; box.appendChild(im);
  });
}

/* ---------- NAVIGATION: sticky state, active link, mobile menu ---------- */
function nav() {
  const hd = $("#nav"), b = $("#burger"), menu = $("#menu");
  new IntersectionObserver(([e]) => hd.classList.toggle("scrolled", !e.isIntersecting)).observe($("#top"));
  const set = o => { hd.classList.toggle("open", o); b.setAttribute("aria-expanded", String(o)); document.body.classList.toggle("lock", o); };
  b.addEventListener("click", () => { const o = !hd.classList.contains("open"); set(o); if (o) $("a", menu).focus({ preventScroll: true }); });
  document.addEventListener("keydown", e => { if (e.key === "Escape" && hd.classList.contains("open")) { set(false); b.focus(); } });
  menu.addEventListener("click", e => { if (e.target.closest("a,button")) set(false); });
  matchMedia("(min-width:961px)").addEventListener("change", e => e.matches && set(false));
  const links = $$("a.l", menu);
  const so = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) links.forEach(a => a.setAttribute("aria-current", String(a.getAttribute("href") === "#" + e.target.id)));
  }), { rootMargin: "-45% 0px -50% 0px" });
  $$("[data-nav]").forEach(s => so.observe(s));
}

/* ---------- SCROLL REVEALS: each element animates once ---------- */
function reveals() {
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  }), { threshold: .15, rootMargin: "0px 0px -6% 0px" });
  $$(".rv,.steps,.dia").forEach(el => io.observe(el));
}

/* ---------- CARD PARALLAX: subtle image shift on mouse hover (desktop only) ---------- */
function cardParallax() {
  if (!matchMedia("(hover:hover) and (pointer:fine)").matches) return;
  $$(".card").forEach(c => {
    let raf;
    c.addEventListener("pointermove", e => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = c.getBoundingClientRect();
        c.style.setProperty("--px", ((e.clientX - r.left) / r.width - .5) * -10 + "px");
        c.style.setProperty("--py", ((e.clientY - r.top) / r.height - .5) * -8 + "px");
      });
    });
    c.addEventListener("pointerleave", () => { c.style.removeProperty("--px"); c.style.removeProperty("--py"); });
  });
}

/* ---------- FORMS + WALLET BUTTON ---------- */
function toast(m) {
  const t = $("#toast"); t.textContent = m; t.classList.add("show");
  clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.remove("show"), 4500);
}
function drone() {
  const box = $("#drone"); 
  if (!box) return;
  
  const src = AERVNYX_ASSETS.howItWorks;
  if (src) box.style.setProperty("--drone-mask", `url("${new URL(src, document.baseURI).href}")`);
  if (matchMedia("(prefers-reduced-motion:reduce)").matches) return;

  const floatEl = $(".drone__float", box) || box;
  const cv = $(".dronefx", box);
  const g = cv ? cv.getContext("2d") : null;
  
  let W = 0, H = 0, D = 1;
  const fit = () => {
    if (!cv) return;
    D = Math.min(devicePixelRatio || 1, 2);
    W = cv.width = cv.clientWidth * D;
    H = cv.height = cv.clientHeight * D;
  };
  fit();
  addEventListener("resize", fit);

  let x = 0, y = 0, rz = 0;
  let targetX = 0, targetY = 0, targetRz = 0;
  let time = 0;

  const tick = () => {
    time += 0.04;
    targetX = Math.sin(time * 2) * 55 + Math.cos(time * 1.1) * 30;
    targetY = Math.cos(time * 1.6) * 45 + Math.sin(time * 0.7) * 20;
    targetRz = Math.sin(time * 0.9) * 6;

    x += (targetX - x) * 0.12;
    y += (targetY - y) * 0.12;
    rz += (targetRz - rz) * 0.12;

    if (floatEl) {
      floatEl.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0px) rotate(${rz.toFixed(1)}deg)`;
    }

    if (g && W > 0 && H > 0) {
      g.clearRect(0, 0, W, H);
    }

    requestAnimationFrame(tick);
  };

  box.classList.add("live");
  requestAnimationFrame(tick);
}

drone();

/* ---------- ROADMAP SCROLL ANIMATION ---------- */
function roadmapScroll() {
  const rm = $("#roadmap-wrapper");
  const track = $("#rm-track");
  if (!rm || !track) return;
  
  window.addEventListener("scroll", () => {
    const rect = rm.getBoundingClientRect();
    const winH = window.innerHeight;
    // Calculate progress based on scroll position within the section
    let progress = (winH / 1.5 - rect.top) / rect.height;
    progress = Math.max(0, Math.min(1, progress));
    track.style.height = (progress * 100) + "%";
  }, { passive: true });
}

/* ---------- HEADER ACTIONS: WALLET & LANGUAGE SWITCHER ---------- */
function headerActions() {
  const walletBtn = $("[data-wallet]");
  const langBtn = $("[data-lang]");

  if (walletBtn) {
    walletBtn.addEventListener("click", () => {
      toast("Web3 Wallet integration on DotOne Smart Chain (Chain ID: 505) will be enabled at launch.");
    });
  }

  if (langBtn) {
    langBtn.addEventListener("click", () => {
      const codes = $$(".lang-code", langBtn);
      codes.forEach(c => c.classList.toggle("active"));
      toast("Persian (FA) language pack is currently under preparation.");
    });
  }
}


/* ---------- HOLO CARD DISINTEGRATION INTO 3D TOKENS & FLYING DRONES ---------- */
function cardTokenDisintegrate() {
  const scene = $(".holo-scene");
  const card = $(".cyber-card", scene);
  if (!scene || !card) return;

  // Create overlay canvas for 3D tokens and autonomous flying drones
  let canvas = $(".holo-particles", scene);
  if (!canvas) {
    canvas = document.createElement("canvas");
    canvas.className = "holo-particles";
    scene.appendChild(canvas);
  }
  const ctx = canvas.getContext("2d");

  let W = 0, H = 0, dpr = 1;
  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = canvas.clientWidth;
    H = canvas.clientHeight;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize();
  window.addEventListener("resize", resize);

  // Brand Cybernetic Palette: Neon Orange & Cyber Blue
  const PALETTE = [
    { main: "#EC5800", light: "#FFB078", dark: "#3A1500", glow: "rgba(236, 88, 0, 0.6)", rgb: "236, 88, 0" },
    { main: "#0096FF", light: "#80D0FF", dark: "#002244", glow: "rgba(0, 150, 255, 0.6)", rgb: "0, 150, 255" }
  ];

  let hovered = false;
  let animId = null;
  let shockwave = 0;
  const mouse = { x: 0, y: 0, active: false };
  const entities = [];

  // Spawn ONLY varied-size Tokens and varied-size Flying Drones (Zero dust dots)
  function spawnSwarm() {
    entities.length = 0;
    const cx = W / 2;
    const cy = H / 2;
    const cardW = 280;
    const cardH = 170;

    // 1. Spawn 24 Multi-Scale 3D Spinning Aervnyx Tokens (Small, Medium, Large)
    const tokenSizes = [
      7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5,
      11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15,
      16.5, 17.5, 18.5, 19.5, 20.5, 21, 16, 18
    ];

    tokenSizes.forEach((baseRadius, i) => {
      const ox = cx + (Math.random() - 0.5) * cardW;
      const oy = cy + (Math.random() - 0.5) * cardH;
      const angle = Math.atan2(oy - cy, ox - cx) + (Math.random() - 0.5) * 0.5;
      const color = PALETTE[i % 2];

      entities.push({
        type: "token",
        ox, oy,
        x: ox, y: oy,
        z: 0,
        vx: Math.cos(angle) * (4 + Math.random() * 5),
        vy: Math.sin(angle) * (4 + Math.random() * 5),
        orbitAngle: angle,
        orbitRx: 48 + Math.random() * 118,
        orbitRy: 32 + Math.random() * 78,
        orbitTilt: (Math.random() - 0.5) * 0.85,
        orbitSpeed: (0.012 + Math.random() * 0.016) * (i % 2 === 0 ? 1 : -1),
        baseRadius,
        radius: baseRadius,
        rotY: Math.random() * Math.PI * 2,
        rotYSpeed: 0.045 + Math.random() * 0.055,
        rotZ: (Math.random() - 0.5) * 0.45,
        color,
        alpha: 0
      });
    });

    // 2. Spawn 14 Multi-Scale Autonomous Flying Drones (Micro, Tactical, Heavy Cargo)
    const droneScales = [
      0.52, 0.58, 0.65, 0.72, 0.78,
      0.88, 0.95, 1.02, 1.08, 1.15,
      1.24, 1.32, 1.40, 0.82
    ];

    droneScales.forEach((baseScale, i) => {
      const ox = cx + (Math.random() - 0.5) * cardW * 0.9;
      const oy = cy + (Math.random() - 0.5) * cardH * 0.9;
      const angle = (i / droneScales.length) * Math.PI * 2 + (Math.random() - 0.5) * 0.3;
      const color = PALETTE[(i + 1) % 2];

      entities.push({
        type: "drone",
        ox, oy,
        x: ox, y: oy,
        z: 0,
        vx: Math.cos(angle) * (5 + Math.random() * 4),
        vy: Math.sin(angle) * (5 + Math.random() * 4),
        orbitAngle: angle,
        orbitRx: 65 + Math.random() * 110,
        orbitRy: 42 + Math.random() * 68,
        orbitTilt: (Math.random() - 0.5) * 0.7,
        orbitSpeed: (0.016 + Math.random() * 0.014) * (i % 2 === 0 ? 1 : -1),
        wavePhase: Math.random() * Math.PI * 2,
        baseScale,
        scale: baseScale,
        bankAngle: 0,
        rotorPhase: Math.random() * Math.PI * 2,
        ledPhase: Math.random() * Math.PI * 2,
        trail: [],
        color,
        alpha: 0
      });
    });
  }

  // Render a 3D Spinning Aervnyx Coin Token
  function drawToken(t) {
    ctx.save();
    ctx.translate(t.x, t.y);
    ctx.rotate(t.rotZ);

    const flip = Math.cos(t.rotY);
    const scaleX = Math.sign(flip || 1) * Math.max(0.2, Math.abs(flip));
    const r = t.radius;

    // Outer neon glow
    ctx.shadowColor = t.color.glow;
    ctx.shadowBlur = 12;

    // 3D Coin metallic thickness edge
    ctx.beginPath();
    ctx.ellipse(flip * (r * 0.16), 0, r * Math.abs(scaleX), r, 0, 0, Math.PI * 2);
    ctx.fillStyle = t.color.main;
    ctx.globalAlpha = t.alpha * 0.9;
    ctx.fill();

    // Scale horizontally for 3D spin illusion
    ctx.scale(scaleX, 1);

    // Coin dark cybernetic face
    ctx.beginPath();
    ctx.arc(0, 0, r, 0, Math.PI * 2);
    ctx.fillStyle = "#040B14";
    ctx.globalAlpha = t.alpha * 0.96;
    ctx.fill();
    ctx.lineWidth = Math.max(1.2, r * 0.12);
    ctx.strokeStyle = t.color.light;
    ctx.stroke();

    // Inner precision ring
    ctx.beginPath();
    ctx.arc(0, 0, r * 0.74, 0, Math.PI * 2);
    ctx.lineWidth = Math.max(0.7, r * 0.06);
    ctx.strokeStyle = t.color.main;
    ctx.stroke();

    // Aervnyx "A" Monogram Logo in center
    const s = r * 0.48;
    ctx.beginPath();
    ctx.moveTo(0, -s);
    ctx.lineTo(s * 0.88, s * 0.85);
    ctx.lineTo(s * 0.36, s * 0.85);
    ctx.lineTo(0, s * 0.05);
    ctx.lineTo(-s * 0.36, s * 0.85);
    ctx.lineTo(-s * 0.88, s * 0.85);
    ctx.closePath();
    ctx.fillStyle = t.color.light;
    ctx.fill();

    ctx.restore();
  }

  // Render an Autonomous 3D Cybernetic Quadcopter Drone in Flight
  function drawDrone(d) {
    // 1. Draw smooth propulsion flight trail behind the drone
    if (d.trail.length > 1) {
      ctx.save();
      for (let i = 0; i < d.trail.length - 1; i++) {
        const p0 = d.trail[i];
        const p1 = d.trail[i + 1];
        const ratio = (i + 1) / d.trail.length;
        ctx.beginPath();
        ctx.moveTo(p0.x, p0.y);
        ctx.lineTo(p1.x, p1.y);
        ctx.strokeStyle = `rgba(${d.color.rgb}, ${ratio * d.alpha * 0.42})`;
        ctx.lineWidth = ratio * 3.2 * d.scale;
        ctx.lineCap = "round";
        ctx.stroke();
      }
      ctx.restore();
    }

    ctx.save();
    ctx.translate(d.x, d.y);
    ctx.rotate(d.bankAngle);
    ctx.scale(d.scale, d.scale);
    ctx.globalAlpha = d.alpha;

    // Ambient thruster downwash glow under the drone
    const downwash = ctx.createRadialGradient(0, 4, 1, 0, 6, 20);
    downwash.addColorStop(0, `rgba(${d.color.rgb}, 0.45)`);
    downwash.addColorStop(1, `rgba(${d.color.rgb}, 0)`);
    ctx.fillStyle = downwash;
    ctx.beginPath();
    ctx.arc(0, 4, 20, 0, Math.PI * 2);
    ctx.fill();

    // 2. Carbon X-Frame Arms (Front-Left, Front-Right, Rear-Left, Rear-Right)
    const arms = [
      { x: -19, y: -5, rx: 8.5, ry: 2.8 },
      { x:  19, y: -5, rx: 8.5, ry: 2.8 },
      { x: -13, y: -11, rx: 6.8, ry: 2.2 },
      { x:  13, y: -11, rx: 6.8, ry: 2.2 }
    ];

    ctx.strokeStyle = "#8CA0B8";
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    arms.forEach(a => {
      ctx.beginPath();
      ctx.moveTo(0, -3);
      ctx.lineTo(a.x, a.y);
      ctx.stroke();
    });

    // 3. High-Speed Spinning Rotors & Motor Pods
    arms.forEach((a, idx) => {
      // Rotor outer blur disc
      ctx.save();
      ctx.translate(a.x, a.y - 2);
      ctx.beginPath();
      ctx.ellipse(0, 0, a.rx, a.ry, 0, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${d.color.rgb}, 0.18)`;
      ctx.fill();
      ctx.lineWidth = 1;
      ctx.strokeStyle = d.color.light;
      ctx.stroke();

      // Spinning blade streaks
      const bladeSpan = a.rx * Math.cos(d.rotorPhase + idx * 1.1);
      ctx.beginPath();
      ctx.moveTo(-bladeSpan, 0);
      ctx.lineTo(bladeSpan, 0);
      ctx.strokeStyle = "#FFFFFF";
      ctx.lineWidth = 1.4;
      ctx.stroke();
      ctx.restore();

      // Motor pod cylinder
      ctx.fillStyle = "#081320";
      ctx.strokeStyle = d.color.main;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(a.x, a.y, 2.4, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    });

    // 4. Suspended Tokenized Cargo Pod underneath the Drone
    ctx.strokeStyle = "rgba(255, 255, 255, 0.45)";
    ctx.lineWidth = 1.1;
    ctx.beginPath();
    ctx.moveTo(-4, 2);
    ctx.lineTo(-3, 8);
    ctx.moveTo(4, 2);
    ctx.lineTo(3, 8);
    ctx.stroke();

    // Cargo Box with glowing Aervnyx core
    ctx.fillStyle = "#040A12";
    ctx.strokeStyle = d.color.main;
    ctx.lineWidth = 1.3;
    ctx.beginPath();
    ctx.roundRect(-6.5, 7, 13, 9, 2.5);
    ctx.fill();
    ctx.stroke();

    // Tiny Aervnyx "A" emblem on the drone's cargo pod
    ctx.fillStyle = d.color.light;
    ctx.beginPath();
    ctx.moveTo(0, 8.8);
    ctx.lineTo(3.2, 14.5);
    ctx.lineTo(1.2, 14.5);
    ctx.lineTo(0, 11.8);
    ctx.lineTo(-1.2, 14.5);
    ctx.lineTo(-3.2, 14.5);
    ctx.closePath();
    ctx.fill();

    // 5. Aerodynamic Central Drone Fuselage (Hull)
    ctx.shadowColor = d.color.glow;
    ctx.shadowBlur = 10;
    ctx.fillStyle = "#091524";
    ctx.strokeStyle = d.color.light;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(0, -9);
    ctx.lineTo(11, -3);
    ctx.lineTo(7, 3);
    ctx.lineTo(-7, 3);
    ctx.lineTo(-11, -3);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Glowing Cybernetic Visor / Front Sensor Strip
    ctx.strokeStyle = d.color.main;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(-5, -2.5);
    ctx.lineTo(5, -2.5);
    ctx.stroke();

    // Blinking Navigation Strobe LED on top of fuselage
    const ledBlink = 0.5 + 0.5 * Math.sin(d.ledPhase);
    ctx.fillStyle = ledBlink > 0.55 ? "#00FF80" : d.color.light;
    ctx.beginPath();
    ctx.arc(0, -6, 1.7, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }

  function renderLoop() {
    ctx.clearRect(0, 0, W, H);
    const cx = W / 2;
    const cy = H / 2;
    let activeCount = 0;

    // Expanding energy shockwave on initial card shatter
    if (shockwave > 0 && shockwave < 1) {
      shockwave += 0.038;
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, shockwave * 185, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(236, 88, 0, ${(1 - shockwave) * 0.65})`;
      ctx.lineWidth = 2.8 * (1 - shockwave);
      ctx.stroke();
      ctx.restore();
    }

    // Update physics for all tokens and drones
    for (let i = 0; i < entities.length; i++) {
      const e = entities[i];

      if (hovered) {
        e.orbitAngle += e.orbitSpeed;

        // Calculate 3D tilted elliptical orbit coordinates
        const cosA = Math.cos(e.orbitAngle);
        const sinA = Math.sin(e.orbitAngle);
        const cosT = Math.cos(e.orbitTilt);
        const sinT = Math.sin(e.orbitTilt);

        let tx = cx + (cosA * e.orbitRx * cosT - sinA * e.orbitRy * sinT);
        let ty = cy + (cosA * e.orbitRx * sinT + sinA * e.orbitRy * cosT);

        // Add agile figure-8 vertical wave for flying drones
        if (e.type === "drone") {
          e.wavePhase += 0.045;
          ty += Math.sin(e.wavePhase) * 14;
        }

        // Depth value z (-1 back to +1 front) for realistic 3D size scaling
        e.z = sinA;
        const depthFactor = 1 + e.z * 0.28;

        const prevX = e.x;
        const prevY = e.y;

        // Smooth transition from initial burst into orbital flight
        e.x += e.vx + (tx - e.x) * 0.085;
        e.y += e.vy + (ty - e.y) * 0.085;
        e.vx *= 0.88;
        e.vy *= 0.88;

        // Interactive cursor magnetic repulsion
        if (mouse.active) {
          const mdx = e.x - mouse.x;
          const mdy = e.y - mouse.y;
          const mDist = Math.hypot(mdx, mdy);
          if (mDist < 95 && mDist > 1) {
            const push = ((95 - mDist) / 95) * 5.2;
            e.x += (mdx / mDist) * push;
            e.y += (mdy / mDist) * push;
          }
        }

        // Type-specific animations
        if (e.type === "token") {
          e.rotY += e.rotYSpeed;
          e.radius = e.baseRadius * depthFactor;
        } else {
          e.rotorPhase += 0.65;
          e.ledPhase += 0.14;
          e.scale = e.baseScale * depthFactor;

          // Bank/tilt the drone naturally into its horizontal flight velocity
          const moveDx = e.x - prevX;
          const targetBank = Math.max(-0.48, Math.min(0.48, moveDx * 0.09));
          e.bankAngle += (targetBank - e.bankAngle) * 0.15;

          // Record flight trail coordinates
          e.trail.push({ x: e.x, y: e.y });
          if (e.trail.length > 9) e.trail.shift();
        }

        e.alpha = Math.min(1, e.alpha + 0.09);
        activeCount++;
      } else {
        // Reassemble tokens and drones smoothly back into the card footprint
        const dx = e.ox - e.x;
        const dy = e.oy - e.y;
        e.x += dx * 0.17;
        e.y += dy * 0.17;

        if (e.type === "token") {
          e.rotY += e.rotYSpeed;
        } else {
          e.rotorPhase += 0.65;
          e.bankAngle *= 0.85;
          if (e.trail.length > 0) e.trail.shift();
        }

        if (Math.hypot(dx, dy) < 22) {
          e.alpha *= 0.8;
        }
        if (e.alpha > 0.03) activeCount++;
      }
    }

    // Sort by 3D depth (z) so foreground drones & large tokens pass in front of background ones
    const sorted = entities.slice().sort((a, b) => a.z - b.z);
    for (let i = 0; i < sorted.length; i++) {
      const item = sorted[i];
      if (item.alpha > 0.02) {
        if (item.type === "token") drawToken(item);
        else drawDrone(item);
      }
    }

    if (activeCount > 0 || hovered) {
      animId = requestAnimationFrame(renderLoop);
    } else {
      ctx.clearRect(0, 0, W, H);
      animId = null;
    }
  }

  scene.addEventListener("mouseenter", () => {
    resize();
    spawnSwarm();
    hovered = true;
    shockwave = 0.01;
    scene.classList.add("is-vaporized");
    if (!animId) animId = requestAnimationFrame(renderLoop);
  });

  scene.addEventListener("mousemove", e => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
    mouse.active = true;
  });

  scene.addEventListener("mouseleave", () => {
    hovered = false;
    mouse.active = false;
    setTimeout(() => {
      if (!hovered) scene.classList.remove("is-vaporized");
    }, 220);
  });
}
/* ---------- INIT ---------- */
/* ---------- INIT ---------- */
(function init() {
  document.documentElement.style.setProperty("--speed", CONFIG.motion.speed);
  render(); diagram(); bindLayers();
  $$("i[data-i]").forEach(e => (e.innerHTML = svg(e.dataset.i)));
  skyline(); loadAssets(); nav(); reveals(); cardParallax(); drone(); roadmapScroll(); headerActions(); cardTokenDisintegrate();
})();

