# Research animations

These conceptual diagrams are the animations embedded in
`Neural-LoFi-NYU-final-latest.key` (September 2026). The source GIFs were matched
by SHA-256 against the deck's embedded media.

| Web asset | Original in `lofitalk/outputs/neural_lofi_motion/` | Duration |
| --- | --- | --- |
| `neural-lofi.mp4` | `forward-lofi-quick.gif` | 16.1 s |
| `backward-coupling.mp4` | `backward-lofi.gif` | 15 s |
| `neural-lofi-poster.png` | `forward-quick-poster.png` | Still |
| `backward-coupling-poster.png` | `backward-poster.png` | Still |

Both videos retain the original 1600 × 680 resolution, 20 fps, and timing.
They were converted to H.264 with no audio, CRF 18, `yuv420p`, and `+faststart`
for browser playback. For example:

```sh
ffmpeg -i forward-lofi-quick.gif -an -c:v libx264 -preset slow -crf 18 \
  -pix_fmt yuv420p -movflags +faststart neural-lofi.mp4
```

The editable animation source is `lofitalk/scripts/build_lofi_motion.mjs`.
These illustrate feature-learning mechanisms; they are not experimental data
or simulations of gradient descent.
