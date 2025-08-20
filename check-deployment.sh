#!/bin/bash

# GitHub Pages Deployment Status Checker
# This script checks if your website is deployed and accessible

echo "GitHub Pages Deployment Status Checker"
echo "======================================"
echo ""

WEBSITE_URL="https://adityar-bits.github.io/personal_profile/"

echo "Checking deployment status for: $WEBSITE_URL"
echo ""

# Check if website is accessible
echo "Testing website accessibility..."
if curl -s -o /dev/null -w "%{http_code}" "$WEBSITE_URL" | grep -q "200"; then
    echo "✅ SUCCESS: Your website is LIVE and accessible!"
    echo ""
    echo "🌐 Website URL: $WEBSITE_URL"
    echo ""
    echo "You can now:"
    echo "- Share this URL with others"
    echo "- Add it to your resume/LinkedIn"
    echo "- Test all features and functionality"
    echo ""
    echo "To open in your browser, run: open $WEBSITE_URL"
else
    echo "⏳ Website is still being deployed or not accessible yet."
    echo ""
    echo "This usually means:"
    echo "1. GitHub Pages is still building your site (wait 2-5 minutes)"
    echo "2. Pages hasn't been enabled yet"
    echo ""
    echo "To enable GitHub Pages:"
    echo "1. Go to https://github.com/AdityaR-Bits/personal_profile"
    echo "2. Click 'Settings' → 'Pages'"
    echo "3. Set Source to 'Deploy from a branch'"
    echo "4. Select 'main' branch and '/' folder"
    echo "5. Click Save"
    echo ""
    echo "Check back in a few minutes!"
fi

echo ""
echo "To check deployment progress, visit:"
echo "https://github.com/AdityaR-Bits/personal_profile/actions" 