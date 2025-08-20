#!/bin/bash

# Personal Profile Website Deployment Script
# This script automates the deployment process for your personal website

echo "Personal Profile Website Deployment Script"
echo "=========================================="
echo ""

# Check if we're in the right directory
if [ ! -f "index.html" ]; then
    echo "Error: index.html not found. Please run this script from your website directory."
    exit 1
fi

# Initialize Git repository if it doesn't exist
if [ ! -d ".git" ]; then
    echo "Initializing Git repository..."
    git init
    echo "Git repository initialized successfully"
else
    echo "Git repository already exists"
fi

# Add all files
echo "Adding files to Git..."
git add .

# Commit changes
echo "Committing changes..."
git commit -m "Update website content - $(date)"

# Set the branch to main
git branch -M main

# Check if remote origin exists
if ! git remote get-url origin > /dev/null 2>&1; then
    echo ""
    echo "No remote origin found. Please add your GitHub repository URL:"
    echo "Example: git remote add origin https://github.com/username/repository.git"
    echo ""
    echo "After adding the remote, run this script again."
    exit 1
fi

# Push to GitHub
echo "Pushing to GitHub..."
if git push -u origin main; then
    echo ""
    echo "Successfully pushed to GitHub!"
    echo ""
    echo "Next steps:"
    echo "1. Go to your GitHub repository"
    echo "2. Go to Settings > Pages"
    echo "3. Set Source to 'Deploy from a branch'"
    echo "4. Select 'main' branch and '/' folder"
    echo "5. Click Save"
    echo ""
    echo "Your website will be available at: https://username.github.io/repository-name"
    echo "Deployment usually takes 2-5 minutes"
else
    echo "Error: Failed to push to GitHub. Please check your remote URL and permissions."
    exit 1
fi 