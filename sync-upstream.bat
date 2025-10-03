@echo off
echo 🔄 Syncing updates from upstream repository...

echo 📥 Fetching latest changes from upstream...
git fetch upstream

echo 🌿 Switching to main branch...
git checkout main

echo 🔀 Merging upstream changes...
git merge upstream/main

echo 📤 Pushing changes to your fork...
git push origin main

echo ✅ Sync complete! Your fork is now up to date with the original repository.
echo 🚀 If you have Vercel connected, it will automatically deploy the updates.
pause
