# 🔐 Firebase Authentication Setup Guide

Your portfolio CMS now has **secure Google authentication** with email allowlist! Only authorized emails can access the admin panel.

## 🎯 **What You Have**

✅ **Google Authentication** - Secure login with Google accounts  
✅ **Email Allowlist** - Only specific emails can access admin  
✅ **Protected Routes** - Admin panel requires authentication  
✅ **User Profile** - Shows signed-in user info  
✅ **Auto-redirect** - Redirects to login when unauthorized  
✅ **Beautiful UI** - Professional login page  

---

## 🚀 **Firebase Console Setup**

### **Step 1: Enable Authentication**

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select your project: `princenyamadi-ed2ca`
3. Click **"Authentication"** in the sidebar
4. Click **"Get Started"** if not already enabled

### **Step 2: Enable Google Sign-In Provider**

1. Go to **Authentication** → **Sign-in method**
2. Click on **"Google"**
3. Toggle **"Enable"**
4. Set **Project support email** to: `princenyamadi.pn@gmail.com`
5. Click **"Save"**

### **Step 3: Add Authorized Domain** (for production)

1. In **Authentication** → **Settings** → **Authorized domains**
2. Add your domain: `princenyamadi-ed2ca.web.app`
3. For custom domain, also add: `your-custom-domain.com`

---

## 🔒 **Email Allowlist Configuration**

### **Current Authorized Email:**
```
princenyamadi.pn@gmail.com
```

### **To Add More Admins:**

Edit `src/services/authService.ts`:

```typescript
const ADMIN_EMAILS = [
  'princenyamadi.pn@gmail.com', // Your email
  'admin2@example.com',         // Add more emails here
  'admin3@example.com',
  // Add as many as needed
];
```

### **Security Features:**
- ✅ **Email Verification** - Only allowlisted emails can access
- ✅ **Auto Sign-out** - Unauthorized users are signed out immediately
- ✅ **Session Persistence** - Stays logged in across browser sessions
- ✅ **Secure Redirects** - Remembers where user was going

---

## 🔄 **How It Works**

### **Authentication Flow:**

1. **User visits `/admin`** → Redirected to `/login` if not authenticated
2. **User clicks "Sign in with Google"** → Google OAuth popup
3. **Google returns user info** → Check if email is in allowlist
4. **If authorized** → Redirect to admin panel
5. **If unauthorized** → Show error, sign out user

### **Protection Levels:**

- **Public Routes** - Accessible to everyone (home, about, projects, etc.)
- **Login Route** - Accessible to everyone, redirects if already logged in
- **Admin Routes** - Requires authentication AND email allowlist approval

---

## 🎛️ **Using the Admin Panel**

### **Access URLs:**

**Local Development:**
```
http://localhost:4001/login  # Login page
http://localhost:4001/admin  # Admin panel (redirects to login if not authenticated)
```

**Production:**
```
https://princenyamadi-ed2ca.web.app/login
https://princenyamadi-ed2ca.web.app/admin
```

### **Login Process:**

1. Go to `/admin` or `/login`
2. Click **"Sign in with Google"**
3. Select your Google account
4. If your email is authorized, you'll be redirected to admin panel
5. If not authorized, you'll see an access denied message

### **Admin Panel Features:**

- **User Profile** - Shows your name, email, and avatar
- **Sign Out Button** - Secure logout
- **Session Persistence** - Stays logged in
- **Project Management** - Full CRUD operations

---

## 🛡️ **Security Features**

### **Current Security:**
- ✅ **Authentication Required** - Must be signed in
- ✅ **Email Allowlist** - Only specific emails allowed
- ✅ **Auto Sign-out** - Unauthorized users are signed out
- ✅ **Protected Routes** - Admin routes require auth
- ✅ **Session Management** - Secure session handling

### **Firestore Security Rules** (Recommended):

Create/update `firestore.rules`:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read access to all (for public portfolio)
    match /{document=**} {
      allow read: if true;
    }
    
    // Allow write access only to authenticated admin users
    match /{document=**} {
      allow write: if request.auth != null 
                   && request.auth.token.email in [
                     'princenyamadi.pn@gmail.com'
                     // Add more admin emails here
                   ];
    }
  }
}
```

### **Storage Security Rules** (Recommended):

Create/update `storage.rules`:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    // Allow read access to all
    match /{allPaths=**} {
      allow read: if true;
    }
    
    // Allow write access only to authenticated admin users
    match /{allPaths=**} {
      allow write: if request.auth != null 
                   && request.auth.token.email in [
                     'princenyamadi.pn@gmail.com'
                   ];
    }
  }
}
```

---

## 🔧 **Development & Testing**

### **Local Testing:**

1. **Start dev server:** `npm run dev`
2. **Go to:** `http://localhost:4001/admin`
3. **Should redirect to:** `http://localhost:4001/login`
4. **Sign in with your Google account**
5. **Should redirect back to admin panel**

### **Testing Unauthorized Access:**

1. Sign in with a different Google account (not in allowlist)
2. Should see "Access denied" message
3. User should be automatically signed out

### **Testing Routes:**

```bash
# These should work without authentication
http://localhost:4001/
http://localhost:4001/about
http://localhost:4001/projects
http://localhost:4001/contact

# These require authentication
http://localhost:4001/admin     # → redirects to /login
http://localhost:4001/login     # → login page
```

---

## 🚀 **Deployment**

### **Build and Deploy:**

```bash
# Build the project
npm run build

# Deploy to Firebase
firebase deploy --only hosting

# Or deploy everything (hosting + rules)
firebase deploy
```

### **Environment Variables:**

Make sure these are set in production:

```bash
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

---

## 🔄 **Troubleshooting**

### **Common Issues:**

**1. "Access denied" for your own email:**
- Check the email in `src/services/authService.ts` matches exactly
- Ensure capitalization matches (comparison is case-insensitive)

**2. Google sign-in popup blocked:**
- Allow popups in browser settings
- Try using a different browser

**3. Redirect loop:**
- Clear browser cache and cookies
- Check Firebase console for domain authorization

**4. "Auth domain not authorized":**
- Add your domain to Firebase Console → Authentication → Settings → Authorized domains

### **Debug Steps:**

1. **Check browser console** for error messages
2. **Verify Firebase config** - check environment variables
3. **Check Firebase Console** - ensure Google auth is enabled
4. **Test with different browser** - rule out browser issues

---

## 🎉 **You're Secure!**

Your admin panel is now protected with:

✅ **Google Authentication** - Professional OAuth flow  
✅ **Email Allowlist** - Only your email(s) can access  
✅ **Automatic Protection** - All admin routes are secured  
✅ **User Management** - Profile display and sign-out  
✅ **Beautiful UI** - Professional login experience  

### **Next Steps:**

1. **Test the login flow** - Visit `/admin` and sign in
2. **Add more admins** - Update the email allowlist if needed
3. **Deploy security rules** - Update Firestore and Storage rules
4. **Monitor access** - Check Firebase Auth logs for sign-ins

**Your portfolio CMS is now production-ready and secure!** 🔐 