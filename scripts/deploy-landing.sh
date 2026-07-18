#!/usr/bin/env bash
#
# deploy-landing — publish the Coachr landing site (https://coachrapp.io).
#
# The live site is served from the `gh-pages` branch (GitHub Pages), NOT from
# `main`. Pushing `main` only backs up your source. This script does both:
#   1. commits + pushes any source changes to `main` (backup / history)
#   2. runs `npm run deploy`, which builds `dist/` (including the CNAME from
#      public/) and force-pushes it to the `gh-pages` branch — the step that
#      actually updates the live site.
#
# Usage:
#   ./scripts/deploy-landing.sh                 # default commit message
#   ./scripts/deploy-landing.sh "update pricing"  # custom commit message
#
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
APP_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"   # landing repo
cd "$APP_DIR"

COMMIT_MSG="${1:-Update landing site}"

# 1. Commit + push source to main (backup). Skip commit if clean, still push.
if [[ -n "$(git status --porcelain)" ]]; then
  echo "▸ committing changes: \"$COMMIT_MSG\""
  git add -A
  git commit -m "$COMMIT_MSG" >/dev/null
else
  echo "▸ no source changes to commit."
fi
echo "▸ pushing main → origin"
git push origin main

# 2. Build + publish to the gh-pages branch (updates the live site).
echo "▸ building and deploying to gh-pages (coachrapp.io)…"
npm run deploy

echo "✅ Done. Live at https://coachrapp.io/ (GitHub Pages may take ~1 min to refresh)."
