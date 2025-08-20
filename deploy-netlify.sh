#!/bin/bash

# Netlify Deployment Script for Personal Profile Website
# This is the RECOMMENDED deployment method

echo "🚀 Netlify Deployment Script - Personal Profile Website"
echo "========================================================"
echo ""
echo "🌟 Netlify is the BEST FREE option for your website because:"
echo "   ✅ Free forever with no credit card required"
echo "   ✅ Custom domain with free SSL certificate"
echo "   ✅ Global CDN for fast loading worldwide"
echo "   ✅ Contact form works automatically"
echo "   ✅ Professional features included"
echo ""

# Check if files exist
if [ ! -f "index.html" ] || [ ! -f "styles.css" ] || [ ! -f "script.js" ]; then
    echo "❌ Error: Required files not found!"
    echo "   Make sure you're in the correct directory with:"
    echo "   - index.html"
    echo "   - styles.css" 
    echo "   - script.js"
    exit 1
fi

echo "✅ All required files found!"
echo ""

echo "📋 DEPLOYMENT STEPS:"
echo "===================="
echo ""
echo "1️⃣  Go to https://netlify.com"
echo "2️⃣  Click 'Sign up' (use GitHub for easiest setup)"
echo "3️⃣  After signing in, you'll see the dashboard"
echo "4️⃣  DRAG AND DROP your entire website folder to the deployment area"
echo "5️⃣  Wait 10-30 seconds for upload and processing"
echo "6️⃣  Your site will be live with a random URL like:"
echo "    https://random-name.netlify.app"
echo "7️⃣  Click 'Site settings' → 'Change site name' to customize URL"
echo ""

echo "🎯 RECOMMENDED SITE NAME:"
echo "   aditya-rustagi-profile.netlify.app"
echo "   (or something similar that represents you)"
echo ""

echo "🔗 CUSTOM DOMAIN (Optional but Professional):"
echo "   - Buy a domain from Namecheap, GoDaddy, or Google Domains"
echo "   - In Netlify: Site settings → Domain management → Add custom domain"
echo "   - Update DNS settings at your domain provider"
echo "   - Wait 24-48 hours for DNS propagation"
echo ""

echo "📱 TESTING YOUR WEBSITE:"
echo "========================"
echo "1. Test on desktop browser"
echo "2. Test on mobile (resize browser or use dev tools)"
echo "3. Check all links work (GitHub, LinkedIn)"
echo "4. Test contact form"
echo "5. Verify responsive design"
echo ""

echo "🚀 ADVANCED SETUP (Git Integration for Easy Updates):"
echo "====================================================="
echo "1. In Netlify dashboard, click 'New site from Git'"
echo "2. Choose GitHub and authorize Netlify"
echo "3. Select your repository"
echo "4. Build settings: Leave all fields empty (not needed for static sites)"
echo "5. Click 'Deploy site'"
echo "6. Now every time you push to GitHub, your site updates automatically!"
echo ""

echo "💡 PRO TIPS:"
echo "============"
echo "• Start with drag & drop for immediate deployment"
echo "• Add Git integration later for automatic updates"
echo "• Use a custom domain for maximum professional impact"
echo "• Your contact form will work automatically on Netlify"
echo "• Netlify provides free analytics and performance monitoring"
echo ""

echo "🎉 READY TO DEPLOY!"
echo "==================="
echo "Your website files are ready. Follow the steps above to deploy on Netlify."
echo ""
echo "Need help? Netlify has excellent documentation and support!"
echo ""

# Check if user wants to test locally first
read -p "Would you like to test your website locally first? (y/n): " -n 1 -r
echo ""
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "🌐 Testing website locally..."
    echo "Opening in default browser..."
    
    # Try to open in browser (works on macOS, Linux, Windows)
    if command -v open &> /dev/null; then
        open index.html
    elif command -v xdg-open &> /dev/null; then
        xdg-open index.html
    elif command -v start &> /dev/null; then
        start index.html
    else
        echo "Please open index.html in your browser manually"
    fi
    
    echo "✅ Website opened in browser. Test all features before deploying!"
    echo ""
fi

echo "🚀 Ready to deploy on Netlify!"
echo "Go to https://netlify.com and follow the steps above."
echo ""
echo "Your professional profile website will be live in minutes! 🎉" 