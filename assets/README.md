# Image assets

Save your images in this folder with these filenames, or change the paths in `AERVNYX_ASSETS` at the top of `js/main.js` (keep the property names).

| File | Property | Used in | Size / ratio |
|---|---|---|---|
| `hero-city-drone.webp` | `heroBackground` | Hero background | 2400×1350, wide. Keep the subject on the right; the left stays dark behind the headline |
| `tokenized-drones.webp` | `tokenizedDrones` | Product card 1 | 1200×750 (16:10) |
| `tokenized-vehicles.webp` | `tokenizedVehicles` | Product card 2 | 1200×750 (16:10) |
| `zerovault.webp` | `zeroVault` | Product card 3 | 1200×750 (16:10) |
| `escrow-delivery.webp` | `escrowDelivery` | Product card 4 | 1200×750 (16:10) |
| `ecosystem-globe.webp` | `ecosystemGlobe` | Faint backdrop behind the layer diagram (optional) | 1200×1200, transparent or dark background |
| `final-cta.webp` | `finalCTA` | Final call-to-action background | 2400×1200, wide |

## Replacing images
1. Export as WebP (or JPG/PNG) and save it here.
2. Update the path next to the property in `AERVNYX_ASSETS`.
3. Use dark, low-contrast images where text sits on top. Keep palette consistent with `#010B13` and `#EC5800`.

## If an image is missing
Nothing breaks. The hero shows a built-in illustrated skyline, drone and vehicle scene. Each product card shows its line icon on an orange glow. The ecosystem and final CTA backgrounds fall back to the technical grid.

Below-the-fold images are lazy-loaded. The hero image is loaded eagerly with high priority.
