# EmailJS Setup Instructions for T4Translation Website

## Overview
The website now uses EmailJS to handle form submissions from both the Contact page and Get Started page. This eliminates the need for a backend server and allows emails to be sent directly from the frontend.

## Setup Instructions

### 1. EmailJS Account Setup
1. Go to [EmailJS.com](https://www.emailjs.com/) and create an account
2. Create a new service (Gmail, Outlook, etc.)
3. Create an email template with the following variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{reply_to}}` - Reply-to email
   - `{{reason}}` - Contact reason (for contact form)
   - `{{message}}` - Message content
   - `{{project_type}}` - Project type (for get started form)
   - `{{source_language}}` - Source language
   - `{{target_language}}` - Target language
   - `{{phone}}` - Phone number
   - `{{to_email}}` - Your receiving email

### 2. Environment Variables
Create a `.env` file in the project root with your EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_RECEIVER_EMAIL=your_receiving_email@domain.com
```

### 3. Current Configuration
The current setup includes:
- **Service ID**: `service_er34084`
- **Template ID**: `template_vnzlitf`
- **Public Key**: `nQjzW8I9y6b1faYhw`
- **Receiver Email**: `contact@t4translation.com`

### 4. Email Template Example
Create an email template in EmailJS with this structure:

**Subject**: New Contact from {{from_name}} - {{reason}}

**Body**:
```
New message from T4Translation website:

From: {{from_name}} ({{from_email}})
Reason: {{reason}}
Project Type: {{project_type}}
Source Language: {{source_language}}
Target Language: {{target_language}}
Phone: {{phone}}

Message:
{{message}}

---
This email was sent from the T4Translation website contact form.
Reply to: {{reply_to}}
```

### 5. Features
- **Contact Form**: Sends basic contact inquiries
- **Get Started Form**: Sends detailed project requests with all form fields
- **Error Handling**: Retry mechanism with user blocking after 3 failed attempts
- **Validation**: Required field validation
- **Toast Notifications**: Success and error feedback
- **Rate Limiting**: 30-minute cooldown after multiple failures

### 6. Form Fields

#### Contact Form
- Name (required)
- Email (required)
- Reason/Purpose (optional)
- Message (required)

#### Get Started Form
- Name (required)
- Email (required)
- Project Type
- Source Language
- Target Language
- Project Details (required)
- File Upload (note: file names are sent, not actual files)

### 7. Testing
1. Fill out the contact form or get started form
2. Check your configured email address for received messages
3. Verify all form data is properly transmitted

### 8. Deployment Notes
- Environment variables are automatically loaded in Vite
- No server-side configuration needed
- Works with static hosting (Netlify, Vercel, etc.)
- The `.env` file is gitignored for security

### 9. Troubleshooting
- Check browser console for any EmailJS errors
- Verify your EmailJS service is active
- Ensure your email template includes all required variables
- Check spam folder for test emails
- Verify environment variables are correctly set

## Security Notes
- EmailJS public key is safe to expose in frontend code
- Private keys and email credentials are handled by EmailJS
- Rate limiting prevents spam abuse
- Input validation prevents malicious submissions
