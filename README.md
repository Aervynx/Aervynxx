# Aervnyx website (front-end)

Plain HTML, CSS and JavaScript. No framework, no build step, no external dependencies (system font stack).

## Run
Open `index.html` in a browser, or serve the folder:
`python3 -m http.server 8000` → http://localhost:8000

## Structure
```
index.html        page structure (every section is marked with a comment)
css/styles.css    tokens, layout, animation, responsive rules
js/main.js        image config, content config, interactions
assets/           your images (see assets/README.md)
```

## Where to edit
| What | Where |
|---|---|
| Images | `AERVNYX_ASSETS` at the top of `js/main.js` |
| Brand colors | `:root` at the top of `css/styles.css` (`--color-bg`, `--color-accent`, `--color-text`) |
| Nav, product cards, metrics, layers, tech modules, steps, footer links, socials | `CONFIG` in `js/main.js` |
| Hero, ecosystem, technology, final CTA headlines and copy | `index.html` |
| Animation speed | `CONFIG.motion.speed` in `js/main.js` (1 normal, 2 half speed, 0.5 double) or `--speed` in `:root` |
| Hero crop / readability overlay | `.hero__bg img` (object-position) and `.hero__bg::after` in `css/styles.css` |

Reduced-motion preferences are respected automatically.

## Not connected / limitations
- **Connect Wallet** only shows an informational message. No Web3 provider is wired up.
- **Newsletter** validates the email. Set `CONFIG.newsletterEndpoint` to a URL that accepts `POST {"email": "..."}`; while empty it runs in demo mode and stores nothing.
- Footer links set to `#` and the social URLs in `CONFIG.social` are placeholders.
- Most content is rendered from `CONFIG` by JavaScript, so JavaScript must be enabled.
- Metrics show capability labels only. Add a `value` in `CONFIG.metrics` only for verified figures.
- No audits, partnerships, yields, or legal ownership are claimed. Keep it that way unless you have documentation.
- Not yet tested in a browser. Check at 1440, 1280, 768 and 390 px.
