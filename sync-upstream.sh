#!/bin/bash
# Script to sync updates from upstream repository

echo "🔄 Syncing updates from upstream repository..."

# Fetch latest changes from upstream
echo "📥 Fetching latest changes from upstream..."
git fetch upstream

# Switch to main branch
echo "🌿 Switching to main branch..."
git checkout main

# Merge upstream changes
echo "🔀 Merging upstream changes..."
git merge upstream/main

# Push changes to your fork
echo "📤 Pushing changes to your fork..."
git push origin main

echo "✅ Sync complete! Your fork is now up to date with the original repository."
echo "🚀 If you have Vercel connected, it will automatically deploy the updates."
