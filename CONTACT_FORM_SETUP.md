# Contact Form Setup Guide

## 🚀 **Make Your Contact Form Actually Send Emails!**

Your contact form is now set up with EmailJS, which will send actual emails to your inbox when someone fills it out. Here's how to complete the setup:

## 📧 **Option 1: EmailJS (Recommended - Free & Easy)**

### Step 1: Sign Up for EmailJS
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### Step 2: Set Up Email Service
1. **Add Email Service:**
   - Click "Email Services" in your dashboard
   - Click "Add New Service"
   - Choose "Gmail" (or your preferred email provider)
   - Connect your email account
   - Note down your **Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Template
1. **Create Template:**
   - Click "Email Templates" in your dashboard
   - Click "Create New Template"
   - Use this template:

```html
Subject: New Contact Form Message from {{from_name}}

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your personal website contact form.
```

2. **Save the template** and note down your **Template ID** (e.g., `template_xyz789`)

### Step 4: Get Your Public Key
1. Go to "Account" → "API Keys"
2. Copy your **Public Key**

### Step 5: Update Your Code
Replace the placeholders in `script.js`:

```javascript
// Replace YOUR_PUBLIC_KEY with your actual public key
emailjs.init("YOUR_ACTUAL_PUBLIC_KEY");

// Replace YOUR_SERVICE_ID with your service ID
emailjs.send('YOUR_ACTUAL_SERVICE_ID', 'YOUR_ACTUAL_TEMPLATE_ID', {
    // ... rest of the code
})
```

## 🔧 **Alternative Options**

### Option 2: Netlify Forms (Free)
If you deploy on Netlify, forms work automatically:
1. Deploy your site to Netlify
2. Add `netlify` attribute to your form: `<form netlify>`
3. Form submissions go to your Netlify dashboard

### Option 3: Formspree (Free tier available)
1. Go to [https://formspree.io/](https://formspree.io/)
2. Create account and get endpoint URL
3. Update form action to your Formspree endpoint

### Option 4: Google Forms
1. Create a Google Form
2. Embed it in your website
3. Responses go to Google Sheets

## 🎯 **What You Get with EmailJS:**

✅ **Real emails** sent to your inbox  
✅ **Professional appearance** with loading states  
✅ **Success/error messages** for users  
✅ **Form validation** and security  
✅ **Free tier** includes 200 emails/month  
✅ **No backend server** required  

## 📱 **Features Added:**

- **Subject field** for better organization
- **Loading states** while sending
- **Success/error messages** for user feedback
- **Form reset** after successful submission
- **Professional styling** for all states

## 🚨 **Important Notes:**

1. **Free Tier Limits:** EmailJS free tier includes 200 emails/month
2. **Email Verification:** Users can send emails without verification
3. **Spam Protection:** Built-in spam protection included
4. **Customization:** You can customize email templates and styling

## 🔍 **Testing Your Form:**

1. Complete the EmailJS setup
2. Fill out your contact form
3. Submit and check your email
4. Verify the email contains all form data

## 💡 **Pro Tips:**

- **Customize the email template** to match your brand
- **Add CAPTCHA** for additional spam protection
- **Set up email filters** to organize contact form emails
- **Monitor your EmailJS dashboard** for usage statistics

## 🆘 **Need Help?**

- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Support: Available in your dashboard
- Community Forum: [https://community.emailjs.com/](https://community.emailjs.com/)

Your contact form will be fully functional once you complete the EmailJS setup! 🎉 