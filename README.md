# Funnel - Coding Bootcamp Website

## Gmail SMTP Setup Instructions

### 1. Gmail App Password Setup
1. Go to your Google Account settings
2. Enable 2-Factor Authentication if not already enabled
3. Go to Security → 2-Step Verification → App passwords
4. Generate a new app password for "Mail"
5. Copy the 16-character password (no spaces)

### 2. Environment Configuration
1. Update the `.env` file with your credentials:
```env
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-16-character-app-password
RECIPIENT_EMAIL=master@funneln.com
PORT=3001
```

### 3. Running the Application

#### Development Mode (Frontend + Backend)
```bash
npm run dev:full
```
This runs both the frontend (port 5173) and backend (port 3001) simultaneously.

#### Individual Services
```bash
# Frontend only
npm run dev

# Backend only  
npm run dev:server
```

### 4. Testing the Contact Form
1. Fill out the contact form on the website
2. Check the Gmail account for received emails
3. Emails will be sent to `master@funneln.com`

### 5. Production Deployment
- Deploy the backend server to a hosting service (Heroku, Railway, etc.)
- Update `API_BASE_URL` in Contact.tsx with your production backend URL
- Set environment variables on your hosting platform

### 6. Troubleshooting
- **Authentication Error**: Check Gmail credentials and app password
- **Network Error**: Ensure backend server is running on port 3001
- **File Upload Issues**: Check file size (max 10MB) and allowed types

## Features
- Direct Gmail SMTP integration
- File attachment support (up to 10MB)
- Form validation and error handling
- Success/error feedback to users
- Automatic form reset after successful submission