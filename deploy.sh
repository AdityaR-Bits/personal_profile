#!/bin/bash

# Personal Profile Website Deployment Script
# This script helps automate the deployment to GitHub Pages

echo "🚀 Personal Profile Website Deployment Script"
echo "=============================================="

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first."
    exit 1
fi

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo "📁 Initializing Git repository..."
    git init
    echo "✅ Git repository initialized"
else
    echo "📁 Git repository already exists"
fi

# Add all files
echo "📝 Adding files to Git..."
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "Update personal profile website"

# Check if remote origin exists
if ! git remote get-url origin &> /dev/null; then
    echo "🔗 Please add your GitHub repository as remote origin:"
    echo "   git remote add origin https://github.com/[username]/[repository-name].git"
    echo ""
    echo "📋 Then run this script again or manually push to GitHub:"
    echo "   git push -u origin main"
    exit 1
fi

# Push to GitHub
echo "🚀 Pushing to GitHub..."
git push origin main

echo ""
echo "✅ Deployment completed!"
echo ""
echo "📋 Next steps:"
echo "1. Go to your GitHub repository"
echo "2. Navigate to Settings → Pages"
echo "3. Set Source to 'Deploy from a branch'"
echo "4. Select 'main' branch and '/' folder"
echo "5. Click Save"
echo ""
echo "🌐 Your website will be available at:"
echo "   https://[username].github.io/[repository-name]"
echo ""
echo "⏱️  Deployment usually takes 2-5 minutes" 