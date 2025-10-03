# 🤖 Automation Setup

This repository is configured with automatic syncing and deployment capabilities.

## 🔄 Automatic Sync from Upstream

The repository automatically syncs with the original repository (`ahmedtolba481/GlOBALSTAY`) every 6 hours.

### How it works:
1. **GitHub Action** runs every 6 hours
2. **Fetches** latest changes from upstream
3. **Merges** changes into your fork
4. **Pushes** updates to your main branch
5. **Vercel** automatically deploys the changes

### Manual Sync:
You can also trigger a manual sync by:
- Going to **Actions** tab in your GitHub repository
- Clicking **"Sync Upstream Repository"**
- Clicking **"Run workflow"**

## 🚀 Automatic Deployment

### Vercel Integration:
- **Automatic deploys** on every push to main branch
- **Preview deployments** for pull requests
- **Global CDN** for fast loading worldwide

### Setup Vercel:
1. Go to [vercel.com](https://vercel.com)
2. Import your repository: `Eyad-Sharkawy/global-stay`
3. Add these secrets to your repository:
   - `VERCEL_TOKEN`: Your Vercel API token
   - `VERCEL_ORG_ID`: Your Vercel organization ID
   - `VERCEL_PROJECT_ID`: Your Vercel project ID
   - `VERCEL_SCOPE`: Your Vercel scope

## 🔧 Workflows

### 1. Sync Upstream Repository (`sync-upstream.yml`)
- **Triggers:** Every 6 hours, manual, on push
- **Purpose:** Syncs changes from original repository
- **Result:** Your fork stays up to date

### 2. Auto Deploy (`auto-deploy.yml`)
- **Triggers:** On push to main, on pull requests
- **Purpose:** Deploys to Vercel automatically
- **Result:** Live website updates

### 3. Conflict Resolver (`conflict-resolver.yml`)
- **Triggers:** When sync fails due to conflicts
- **Purpose:** Creates PR for manual conflict resolution
- **Result:** Prevents sync failures

## 📊 Monitoring

### Check Status:
- Go to **Actions** tab in your repository
- View workflow runs and their status
- Check logs for any issues

### Notifications:
- GitHub will notify you of workflow failures
- Vercel will notify you of deployment status
- Email notifications can be configured

## 🛠️ Troubleshooting

### Sync Issues:
1. Check **Actions** tab for failed workflows
2. Review logs for specific error messages
3. Manual sync if automatic sync fails

### Deployment Issues:
1. Verify Vercel secrets are correctly set
2. Check Vercel dashboard for deployment logs
3. Ensure all required files are present

### Conflicts:
1. Review the conflict resolution PR
2. Resolve conflicts manually
3. Merge the PR to complete sync

## 🎯 Benefits

- ✅ **Always up to date** with original repository
- ✅ **Automatic deployments** to production
- ✅ **Zero maintenance** required
- ✅ **Conflict handling** with manual resolution
- ✅ **Global availability** via Vercel CDN

Your GlobalStay platform will automatically stay updated and deployed! 🏨✨
