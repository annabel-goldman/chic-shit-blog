#!/bin/bash

# 🚀 Chic Shit Blog Deployment Script
# This script will optimize images and deploy your blog to GitHub Pages

echo "🌟 Chic Shit Blog Deployment Script"
echo "=================================="

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "❌ Git not initialized. Please follow the GitHub setup steps first."
    echo "📖 See DEPLOYMENT_GUIDE.md for instructions."
    exit 1
fi

# Check if npm is available
if ! command -v npm &> /dev/null; then
    echo "❌ npm not found. Please install Node.js first."
    exit 1
fi

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Check image collection size
echo ""
echo "🔍 Analyzing your image collection..."
npm run check-images

# Ask about Git LFS
echo ""
read -p "📦 Do you want to set up Git LFS for large files? (y/N): " setup_lfs
if [[ $setup_lfs =~ ^[Yy]$ ]]; then
    echo "⚡ Setting up Git LFS..."
    
    # Check if Git LFS is installed
    if ! command -v git-lfs &> /dev/null; then
        echo "❌ Git LFS not found. Please install it first:"
        echo "   Mac: brew install git-lfs"
        echo "   Windows: Download from https://git-lfs.github.io/"
        echo "   Linux: sudo apt install git-lfs"
        exit 1
    fi
    
    # Initialize Git LFS
    git lfs install
    
    # Track image files
    git lfs track "*.png"
    git lfs track "*.webp"
    git lfs track "*.jpg"
    git lfs track "*.jpeg"
    
    # Add .gitattributes
    git add .gitattributes
    
    echo "✅ Git LFS configured!"
fi

# Ask if they want to optimize images
echo ""
read -p "🖼️  Optimize images? (y/N): " optimize_images
if [[ $optimize_images =~ ^[Yy]$ ]]; then
    echo "⚡ Optimizing images (this may take a few minutes)..."
    npm run optimize-images
    echo "✅ Images optimized!"
fi

# Git add, commit, and push
echo ""
echo "📤 Preparing to deploy..."

# Add all changes
git add .

# Check if there are changes to commit
if git diff --staged --quiet; then
    echo "ℹ️  No changes to commit."
else
    # Get commit message
    echo ""
    read -p "📝 Enter commit message (or press Enter for default): " commit_message
    if [ -z "$commit_message" ]; then
        commit_message="Update blog content - $(date '+%Y-%m-%d %H:%M')"
    fi
    
    # Commit changes
    git commit -m "$commit_message"
    echo "✅ Changes committed!"
fi

# Push to GitHub
echo ""
echo "🚀 Pushing to GitHub..."
git push origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "🎉 Deployment successful!"
    echo "📱 Your site will be live in 2-3 minutes at:"
    
    # Try to get the GitHub username from git remote
    remote_url=$(git remote get-url origin)
    if [[ $remote_url =~ github\.com[:/]([^/]+)/([^/]+) ]]; then
        username=${BASH_REMATCH[1]}
        repo=${BASH_REMATCH[2]%.git}
        echo "   https://$username.github.io/$repo"
    else
        echo "   https://YOUR-USERNAME.github.io/YOUR-REPO"
    fi
    
    echo ""
    echo "🔧 Next steps:"
    echo "1. Wait 2-3 minutes for GitHub Pages to deploy"
    echo "2. Set up Cloudflare (see DEPLOYMENT_GUIDE.md)"
    echo "3. Test your site performance"
    echo ""
    echo "📊 Performance testing tools:"
    echo "   • Google PageSpeed Insights: https://pagespeed.web.dev/"
    echo "   • GTmetrix: https://gtmetrix.com/"
    echo ""
    echo "🆘 Need help? Check DEPLOYMENT_GUIDE.md for troubleshooting."
else
    echo ""
    echo "❌ Deployment failed. Please check the error above."
    echo "💡 Common fixes:"
    echo "   • Make sure you're connected to the internet"
    echo "   • Check your GitHub credentials"
    echo "   • Verify the repository URL is correct"
fi 