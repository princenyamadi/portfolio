# 🔐 Security Guidelines & API Key Management

This document outlines security best practices for the Portfolio CMS to ensure API keys and sensitive data are never exposed.

## 🚨 Critical Security Rules

### ❌ **NEVER DO THIS:**
```javascript
// NEVER hardcode API keys in your code
const apiKey = "sk-1234567890abcdef"; // 🚨 DANGER!
const firebaseConfig = {
  apiKey: "AIzaSyBxxx...", // 🚨 EXPOSED!
};
```

### ✅ **ALWAYS DO THIS:**
```javascript
// Use environment variables
const apiKey = process.env.VITE_API_KEY;
const firebaseConfig = {
  apiKey: env.firebase.apiKey, // ✅ SECURE!
};
```

## 📁 Environment Variables Setup

### 1. Create Environment Files

Create these files in your project root:

**`.env.local`** (for local development):
```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=your_firebase_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abcdef123456
VITE_FIREBASE_MEASUREMENT_ID=G-XXXXXXXXXX

# Optional API Keys
VITE_EMAILJS_SERVICE_ID=service_xxx
VITE_EMAILJS_TEMPLATE_ID=template_xxx
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_SENDGRID_API_KEY=SG.xxx
VITE_RECAPTCHA_SITE_KEY=6LeXXX
VITE_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX

# Application Settings
VITE_BASE_URL=http://localhost:5173
```

**`.env.production`** (for production deployment):
```env
# Firebase Configuration (Production)
VITE_FIREBASE_API_KEY=your_production_api_key
VITE_FIREBASE_AUTH_DOMAIN=your-prod-project.firebaseapp.com
# ... other production keys
VITE_BASE_URL=https://yourportfolio.com
```

**`.env.staging`** (for staging environment):
```env
# Firebase Configuration (Staging)
VITE_FIREBASE_API_KEY=your_staging_api_key
# ... other staging keys
VITE_BASE_URL=https://staging.yourportfolio.com
```

### 2. Environment File Hierarchy

Vite loads environment files in this order:
1. `.env.local` (always loaded, ignored by git)
2. `.env.[mode]` (e.g., `.env.production`)
3. `.env` (base environment file)

## 🛡️ Security Best Practices

### 1. Firebase Security Rules

**Firestore Rules** (`firestore.rules`):
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Admin-only access for CMS data
    match /projects/{document} {
      allow read: if true; // Public read for portfolio
      allow write: if request.auth != null && isAdmin(request.auth);
    }
    
    match /blog-posts/{document} {
      allow read: if true;
      allow write: if request.auth != null && isAdmin(request.auth);
    }
    
    match /contact-submissions/{document} {
      allow read, write: if request.auth != null && isAdmin(request.auth);
      allow create: if true; // Allow anonymous contact form submissions
    }
    
    // Helper function to check admin status
    function isAdmin(auth) {
      return auth.token.email in [
        'your-admin-email@example.com'
      ];
    }
  }
}
```

**Storage Rules** (`storage.rules`):
```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /public/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    
    match /portfolio/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null && isAdmin();
    }
  }
}
```

### 2. API Key Validation

Our environment system includes validation:

```typescript
// Automatic validation on app startup
import { env } from './config/env';

// Will throw error if required keys are missing
console.log('Firebase Project:', env.firebase.projectId);
```

### 3. Runtime Security Checks

```typescript
import { securityChecks } from './config/env';

// Ensure HTTPS in production
securityChecks.requireSecureContext();

// Safe logging (removes sensitive data)
console.log('Environment:', securityChecks.getSafeEnvForLogging());
```

## 🚀 Deployment Security

### Vercel Deployment

1. **Add Environment Variables in Vercel Dashboard:**
   - Go to Project Settings → Environment Variables
   - Add each `VITE_*` variable separately
   - Set appropriate environment (Development/Preview/Production)

2. **GitHub Secrets for CI/CD:**
   - Never commit `.env` files to GitHub
   - Use GitHub Secrets for automated deployments
   - Reference secrets in GitHub Actions workflows

### Firebase Hosting

1. **Environment Variables:**
   ```bash
   # Set environment variables for Firebase functions
   firebase functions:config:set emailjs.service_id="service_xxx"
   firebase functions:config:set sendgrid.api_key="SG.xxx"
   ```

2. **Deploy with Environment:**
   ```bash
   # Build with production environment
   npm run build:production
   firebase deploy
   ```

## 🔍 Security Monitoring

### 1. Regular Security Audits

```bash
# Check for known vulnerabilities
npm audit

# Update dependencies
npm update

# Check for exposed secrets
git log --all --grep="api" --grep="key" --grep="secret" -i
```

### 2. API Key Rotation

- **Firebase Keys:** Regenerate in Firebase Console
- **Third-party APIs:** Rotate keys monthly
- **Update all environments** when rotating keys

### 3. Access Monitoring

- Monitor Firebase Authentication logs
- Set up alerts for unusual access patterns
- Regular review of user permissions

## 🚨 Incident Response

### If API Keys Are Exposed:

1. **Immediate Actions:**
   ```bash
   # Rotate compromised keys immediately
   # Update all deployment environments
   # Check access logs for unauthorized usage
   ```

2. **Secure the Repository:**
   ```bash
   # Remove sensitive data from git history
   git filter-branch --force --index-filter \
     'git rm --cached --ignore-unmatch .env' \
     --prune-empty --tag-name-filter cat -- --all
   ```

3. **Update Security:**
   - Change all related passwords
   - Review and update security rules
   - Implement additional monitoring

## 📋 Security Checklist

### Development Phase:
- [ ] All `.env*` files are in `.gitignore`
- [ ] No hardcoded secrets in source code
- [ ] Environment validation is implemented
- [ ] Firebase security rules are configured
- [ ] HTTPS is enforced in production

### Pre-Deployment:
- [ ] Environment variables are set in hosting platform
- [ ] Production API keys are different from development
- [ ] Security rules are tested
- [ ] All dependencies are updated
- [ ] Security audit is clean (`npm audit`)

### Post-Deployment:
- [ ] HTTPS is working correctly
- [ ] Environment variables are loaded properly
- [ ] Security rules are active
- [ ] Monitoring is configured
- [ ] Backup and recovery plan is in place

## 🛠️ Tools & Resources

### Security Tools:
- **GitLeaks:** Scan for secrets in git repos
- **npm audit:** Check for known vulnerabilities
- **Firebase Security Rules Simulator:** Test your rules

### Monitoring Services:
- **Firebase Console:** Monitor authentication and usage
- **Sentry:** Error tracking and monitoring
- **Uptime Robot:** Monitor site availability

### Best Practice Resources:
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Firebase Security Best Practices](https://firebase.google.com/docs/rules/security)
- [React Security Best Practices](https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml)

---

## 🔗 Quick Links

- [Environment Configuration](./src/config/env.ts)
- [Firebase Configuration](./src/config/firebase.ts)
- [Git Ignore Rules](./.gitignore)
- [Security Rules](./firestore.rules)

**Remember:** Security is not a one-time setup, it's an ongoing process. Regularly review and update your security practices!