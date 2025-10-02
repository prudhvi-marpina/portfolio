# Portfolio Backend API

A modern Node.js backend for Prudhvi Marpina's portfolio website.

## 🚀 Features

- **RESTful API** with Express.js
- **Contact Form** with email notifications
- **File Upload** support
- **Analytics** tracking
- **Newsletter** subscription
- **Security** with Helmet.js
- **CORS** enabled for frontend integration
- **Logging** with Morgan
- **Environment** configuration

## 🛠 Tech Stack

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **Nodemailer** - Email service
- **Multer** - File upload handling
- **Helmet** - Security middleware
- **Morgan** - HTTP request logger
- **CORS** - Cross-origin resource sharing

## 📦 Installation

```bash
# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Configure your email settings in .env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

## 🚀 Running the Server

```bash
# Development mode
npm run dev

# Production mode
npm start
```

Server will run on `http://localhost:5000`

## 📡 API Endpoints

### Health Check
```
GET /api/health
```

### Portfolio Data
```
GET /api/portfolio
```

### Contact Form
```
POST /api/contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "Hello, I'd like to discuss a project..."
}
```

### File Upload
```
POST /api/upload
Content-Type: multipart/form-data

file: [binary data]
```

### Analytics
```
POST /api/analytics
Content-Type: application/json

{
  "event": "page_view",
  "data": { "page": "/projects" }
}
```

### Newsletter
```
POST /api/newsletter
Content-Type: application/json

{
  "email": "subscriber@example.com"
}
```

## 🔧 Environment Variables

```env
NODE_ENV=development
PORT=5000
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
DATABASE_URL=postgresql://...
JWT_SECRET=your-secret-key
```

## 🚀 Deployment

### Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Railway
```bash
# Install Railway CLI
npm i -g @railway/cli

# Deploy
railway login
railway init
railway up
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 5000
CMD ["npm", "start"]
```

## 🔒 Security Features

- **Helmet.js** - Security headers
- **CORS** - Cross-origin protection
- **Input validation** - Request sanitization
- **File size limits** - Upload protection
- **Rate limiting** - API protection

## 📊 Monitoring

- **Morgan** - HTTP request logging
- **Health checks** - Server status
- **Error handling** - Graceful failures
- **Uptime tracking** - Performance metrics

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details.

