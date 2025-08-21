# How to Add Your Actual Certifications

## 📋 **Step-by-Step Instructions**

### 1. **Get Your Certifications from LinkedIn**
- Go to [https://www.linkedin.com/in/aditya-rustagi54/details/certifications/](https://www.linkedin.com/in/aditya-rustagi54/details/certifications/)
- Copy the details for each certification:
  - **Certification Name**
  - **Issuing Organization**
  - **Issue Date**
  - **Credential ID** (if available)
  - **Credential URL** (if available)

### 2. **Update the HTML File**
- Open `index.html`
- Find the `<!-- Certifications Section -->`
- Replace the template cards with your actual certifications

### 3. **Template Structure to Copy**
```html
<div class="certification-card" data-credential-id="YOUR_ACTUAL_CREDENTIAL_ID">
    <div class="certification-header">
        <div class="certification-icon">
            <i class="fas fa-certificate"></i> <!-- Change icon as needed -->
        </div>
        <div class="certification-info">
            <h3>YOUR_ACTUAL_CERTIFICATION_NAME</h3>
            <p class="certification-issuer">YOUR_ACTUAL_ISSUING_ORGANIZATION</p>
            <p class="certification-date">Issued: YOUR_ACTUAL_DATE</p>
            <p class="certification-id">Credential ID: YOUR_ACTUAL_CREDENTIAL_ID</p>
        </div>
    </div>
    <div class="certification-body">
        <p>YOUR_ACTUAL_DESCRIPTION</p>
        <div class="certification-tags">
            <span class="cert-tag">Skill 1</span>
            <span class="cert-tag">Skill 2</span>
            <span class="cert-tag">Skill 3</span>
        </div>
        <div class="certification-actions">
            <a href="YOUR_ACTUAL_CREDENTIAL_URL" class="btn btn-credential" target="_blank">
                <i class="fas fa-external-link-alt"></i>
                View Credential
            </a>
        </div>
    </div>
</div>
```

### 4. **Icon Options for Different Certification Types**
- **Cloud/AWS**: `<i class="fas fa-cloud"></i>`
- **Data/ML**: `<i class="fas fa-brain"></i>`
- **Security**: `<i class="fas fa-shield-alt"></i>`
- **DevOps**: `<i class="fas fa-cogs"></i>`
- **General**: `<i class="fas fa-certificate"></i>`
- **Award**: `<i class="fas fa-award"></i>`
- **Medal**: `<i class="fas fa-medal"></i>`
- **Trophy**: `<i class="fas fa-trophy"></i>`
- **Star**: `<i class="fas fa-star"></i>`
- **Gem**: `<i class="fas fa-gem"></i>`

### 5. **Example of a Real Certification**
```html
<div class="certification-card" data-credential-id="AWS-SAA-123456">
    <div class="certification-header">
        <div class="certification-icon">
            <i class="fas fa-cloud"></i>
        </div>
        <div class="certification-info">
            <h3>AWS Certified Solutions Architect - Associate</h3>
            <p class="certification-issuer">Amazon Web Services</p>
            <p class="certification-date">Issued: March 2024</p>
            <p class="certification-id">Credential ID: AWS-SAA-123456</p>
        </div>
    </div>
    <div class="certification-body">
        <p>Professional certification demonstrating expertise in designing distributed systems and applications on AWS platform.</p>
        <div class="certification-tags">
            <span class="cert-tag">AWS</span>
            <span class="cert-tag">Cloud Computing</span>
            <span class="cert-tag">Architecture</span>
        </div>
        <div class="certification-actions">
            <a href="https://aws.amazon.com/verification" class="btn btn-credential" target="_blank">
                <i class="fas fa-external-link-alt"></i>
                View Credential
            </a>
        </div>
    </div>
</div>
```

### 6. **What to Update for Each Certification**
- ✅ **Certification Name** (e.g., "AWS Certified Solutions Architect")
- ✅ **Issuing Organization** (e.g., "Amazon Web Services")
- ✅ **Issue Date** (e.g., "March 2024")
- ✅ **Credential ID** (e.g., "AWS-SAA-123456")
- ✅ **Description** (Brief explanation of what it demonstrates)
- ✅ **Skills/Tags** (3-4 relevant skills)
- ✅ **Credential URL** (Link to verify the certification)

### 7. **After Updating**
1. Save the `index.html` file
2. Commit and push your changes:
   ```bash
   git add .
   git commit -m "Add actual certifications from LinkedIn"
   git push
   ```
3. Wait 2-5 minutes for GitHub Pages to deploy
4. Check your website to see the updated certifications

### 8. **Professional Tips**
- Use consistent formatting for dates (e.g., "March 2024" not "03/2024")
- Keep descriptions concise but informative
- Choose relevant skill tags that match the certification
- Ensure credential URLs are working and accessible
- Use appropriate icons for each certification type

## 🎯 **Your Website Will Show**
- Professional certification cards with your actual credentials
- Clickable "View Credential" buttons for verification
- Direct link to your LinkedIn certifications
- Responsive design that works on all devices
- Professional appearance that impresses employers

## 📞 **Need Help?**
If you need assistance updating specific certifications, just share the details from your LinkedIn and I can help format them properly! 