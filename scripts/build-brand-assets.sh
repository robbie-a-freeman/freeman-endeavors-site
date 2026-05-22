#!/usr/bin/env bash
# Render PNG variants of the brand asset set. The SVG sources define typography
# + divider; the figure artwork (figure-square.png / figure-wide.png) is
# composited in via ImageMagick because rsvg-convert cannot load external
# images. Result: SVGs work natively in the browser, build-time PNGs are
# correct.
#
# Requires: rsvg-convert, magick (ImageMagick), Fraunces + Instrument Sans
# installed in fontconfig.

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
BRAND="$ROOT/static/brand"
SRC="$BRAND/source"
CREAM="#FAF7F2"
INK="#1A1A18"

# --- Mark PNGs (figure-square scaled to each size) ---
# Source artwork preserved; just resized for each use case.
for size in 16 32 48 64 128 180 192 256 512 1024; do
  magick "$SRC/figure-square.png" -resize ${size}x${size} -strip "$BRAND/mark/mark-${size}.png"
done

# --- Favicon set ---
magick "$BRAND/mark/mark-16.png" "$BRAND/mark/mark-32.png" "$BRAND/mark/mark-48.png" "$BRAND/favicon/favicon.ico"
cp "$BRAND/mark/mark-16.png" "$BRAND/favicon/favicon-16.png"
cp "$BRAND/mark/mark-32.png" "$BRAND/favicon/favicon-32.png"

# Apple touch icon: 180x180 on cream.
magick "$SRC/figure-square.png" -resize 180x180 -background "$CREAM" -gravity center -extent 180x180 -strip "$BRAND/favicon/apple-touch-icon.png"

# PWA icons (standard + maskable with safe zone padding).
magick "$SRC/figure-square.png" -resize 192x192 -background "$CREAM" -gravity center -extent 192x192 -strip "$BRAND/favicon/icon-192.png"
magick "$SRC/figure-square.png" -resize 512x512 -background "$CREAM" -gravity center -extent 512x512 -strip "$BRAND/favicon/icon-512.png"
# Maskable: 80% safe zone → render figure at 80%, pad with cream to full size.
magick "$SRC/figure-square.png" -resize 410x410 -background "$CREAM" -gravity center -extent 512x512 -strip "$BRAND/favicon/icon-maskable-512.png"

# --- Helper: render a lockup PNG at a target width, with figure composited ---
#   $1 = SVG path, $2 = output PNG, $3 = target width (px),
#   $4 = figure source PNG, $5 = figure x in SVG coords,
#   $6 = figure y, $7 = figure width in SVG coords, $8 = figure height
render_lockup() {
  local svg="$1" out="$2" tw="$3" fig="$4" fx="$5" fy="$6" fw="$7" fh="$8"
  # Compute scale factor from SVG viewBox width to target width
  local vbw
  vbw=$(grep -oE 'viewBox="[^"]+"' "$svg" | head -1 | sed -E 's/viewBox="0 0 ([0-9]+).*/\1/')
  local scale
  scale=$(awk -v t="$tw" -v v="$vbw" 'BEGIN{printf "%.6f", t/v}')
  # Scale all dimensions
  local px py pw ph
  px=$(awk -v v="$fx" -v s="$scale" 'BEGIN{printf "%d", v*s}')
  py=$(awk -v v="$fy" -v s="$scale" 'BEGIN{printf "%d", v*s}')
  pw=$(awk -v v="$fw" -v s="$scale" 'BEGIN{printf "%d", v*s}')
  ph=$(awk -v v="$fh" -v s="$scale" 'BEGIN{printf "%d", v*s}')
  # Render typography-only PNG (image href fails silently, that's fine)
  rsvg-convert -w "$tw" -b "$CREAM" "$svg" -o "/tmp/lockup-typo.png"
  # Resize figure and composite onto typography PNG
  magick "$fig" -resize "${pw}x${ph}" "/tmp/lockup-fig.png"
  magick "/tmp/lockup-typo.png" "/tmp/lockup-fig.png" -geometry "+${px}+${py}" -composite -strip "$out"
  rm -f /tmp/lockup-typo.png /tmp/lockup-fig.png
}

# --- Lockup horizontal (figure 160x160 at 0,0; viewBox 780x160) ---
render_lockup "$BRAND/lockup/lockup-horizontal.svg" "$BRAND/lockup/lockup-horizontal-780.png" 780 "$SRC/figure-square.png" 0 0 160 160
render_lockup "$BRAND/lockup/lockup-horizontal.svg" "$BRAND/lockup/lockup-horizontal-1560.png" 1560 "$SRC/figure-square.png" 0 0 160 160

# --- Lockup stacked (figure 300x300 at 160,20; viewBox 620x540) ---
render_lockup "$BRAND/lockup/lockup-stacked.svg" "$BRAND/lockup/lockup-stacked-620.png" 620 "$SRC/figure-square.png" 160 20 300 300
render_lockup "$BRAND/lockup/lockup-stacked.svg" "$BRAND/lockup/lockup-stacked-1240.png" 1240 "$SRC/figure-square.png" 160 20 300 300

# --- Wordmark PNGs (no figure compositing needed) ---
rsvg-convert -w 880 -b "$CREAM" "$BRAND/wordmark/wordmark.svg" -o "$BRAND/wordmark/wordmark-880.png"
rsvg-convert -w 1760 -b "$CREAM" "$BRAND/wordmark/wordmark.svg" -o "$BRAND/wordmark/wordmark-1760.png"
rsvg-convert -w 1760 -b "$INK" "$BRAND/wordmark/wordmark-light.svg" -o "$BRAND/wordmark/wordmark-light-1760.png"

# --- Full primary logo lockup (figure-wide 550x450 at 40,60; viewBox 1500x600) ---
render_lockup "$BRAND/logo/logo-full.svg" "$BRAND/logo/logo-full-1500.png" 1500 "$SRC/figure-wide.png" 40 60 550 450
render_lockup "$BRAND/logo/logo-full.svg" "$BRAND/logo/logo-full-3000.png" 3000 "$SRC/figure-wide.png" 40 60 550 450

# --- OG image (1200x630, horizontal lockup centered on cream) ---
render_lockup "$BRAND/lockup/lockup-horizontal.svg" "/tmp/og-lockup.png" 1040 "$SRC/figure-square.png" 0 0 160 160
magick -size 1200x630 "xc:$CREAM" "/tmp/og-lockup.png" -gravity center -composite "$BRAND/og/og-default.png"
rm -f /tmp/og-lockup.png

# --- LinkedIn banner (1584x396, figure-wide scene right; viewBox 1584x396) ---
mkdir -p "$BRAND/social"
render_lockup "$BRAND/social/linkedin-banner.svg" "$BRAND/social/linkedin-banner-1584.png" 1584 "$SRC/figure-wide.png" 1140 30 380 311

echo "Brand assets rendered to $BRAND"
