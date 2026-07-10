# CF-Monitor-Mikus

A [Komari Mikus](https://github.com/mikus-loli/komari-mikus) theme port for [CF-Server-Monitor](https://github.com/huilang-me/CF-Server-Monitor) — inject the sakura-pink aesthetic via the admin panel's custom HEAD and SCRIPT fields, without modifying any source code or redeploying.

> [!NOTE]
> This is not a standalone frontend. It works by injecting CSS and JS into an already-deployed CF-Server-Monitor instance through the admin settings page.

## Features

- **Sakura color palette** — pink accent (`#e8668a`), deep purple backgrounds, gradient text, soft shadows
- **Rounded cards with hover lift** — `translateY(-4px)` + top gradient bar on hover
- **Sakura petals animation** — 14 CSS-animated petals drifting inside the nav card
- **Mascot character** — floating QWQ.webp in the bottom-right corner (dismissible)
- **Custom preloader** — loli.gif loading animation with Miku logo and progress bar
- **Welcome banner** — greeting text + live clock integrated into the nav-area card
- **Light/dark theme** — full support for CF-Server-Monitor's `body.light` toggle
- **Button ripple effect** — Material-style touch feedback on all interactive elements
- **SPA route persistence** — MutationObserver keeps banner, petals, and footer credit alive across page transitions
- **Footer credit** — auto-appends "Theme by komari-mikus, ported by aloneowo" with links

## Quick Start

1. Open your CF-Server-Monitor admin panel at `https://your-domain/#/admin`
2. Go to **Settings** → **Appearance**
3. Paste the following into **CUSTOM `<HEAD>`**:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/aloneowo0/cf-monitor-mikus@main/theme-mikus/custom_head.css">
<script src="https://cdn.jsdelivr.net/gh/aloneowo0/cf-monitor-mikus@main/theme-mikus/custom_script.js"></script>
```

4. Leave **CUSTOM SCRIPT** empty
5. Click **Save Configuration**
6. Hard refresh the frontend (`Ctrl+Shift+R`)

That's it. Two lines, no copying large blobs.

## How It Works

| File | Purpose | Loaded via |
|------|---------|------------|
| `custom_head.css` | All visual overrides — colors, cards, modals, animations, layout | `<link>` in HEAD |
| `custom_script.js` | Runtime features — preloader, banner, sakura, mascot, ripple, footer | `<script>` in HEAD |

The CSS overrides CF-Server-Monitor's existing CSS variables (`--bg-primary`, `--accent-pink`, etc.) and restyles every component class (`.server-card`, `.modal-dialog`, `.terminal-header`, etc.) to match the Mikus design language.

The JS runs as an IIFE, uses `MutationObserver` to survive Vue SPA route changes, and all resource images (loli.gif, miku.png, QWQ.webp) are served from this repo via jsDelivr CDN.

## Project Structure

```
cf-monitor-mikus/
├── public/                  # Original Komari Mikus theme (by mikus-loli, MIT)
│   ├── dist/                # Compiled theme assets
│   │   ├── assets/
│   │   │   ├── img/         # loli.gif, miku.png, QWQ.webp
│   │   │   ├── flags/       # Country flag SVGs
│   │   │   ├── logo/        # OS logo SVGs
│   │   │   ├── app.js       # Original theme JS
│   │   │   └── style.css    # Original theme CSS
│   │   └── index.html
│   ├── komari-theme.json    # Original theme config
│   └── mikus.jpg            # Preview screenshot
├── theme-mikus/             # CF-Server-Monitor port
│   ├── custom_head.css      # Injected CSS (raw, no <style> wrapper)
│   ├── custom_head.html     # Same CSS wrapped in <style> (legacy paste method)
│   └── custom_script.js     # Injected JS (IIFE, no <script> wrapper)
└── README.md
```

## Customization

All design tokens are CSS variables defined at the top of `custom_head.css`:

```css
:root {
  --bg-primary: #0f0a15;
  --accent-pink: #ff8fa3;
  --sakura-1: #ffb7c5;
  --sakura-3: #e8668a;
  /* ... */
}
```

Edit, push to your fork, and jsDelivr will serve the updated version (may need [cache purge](https://www.jsdelivr.com/tools/purge)).

## Credits

- **Original theme**: [komari-mikus](https://github.com/mikus-loli/komari-mikus) by [mikus-loli](https://github.com/mikus-loli) (MIT)
- **Target project**: [CF-Server-Monitor](https://github.com/huilang-me/CF-Server-Monitor) by [huilang-me](https://github.com/huilang-me) (MIT)
- **Port**: [aloneowo](https://github.com/aloneowo0)

## License

MIT