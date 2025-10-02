const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const nodemailer = require('nodemailer');
const multer = require('multer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet()); // Security headers
app.use(cors()); // Enable CORS
app.use(morgan('combined')); // Logging
app.use(express.json({ limit: '10mb' })); // Parse JSON
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded

// Configure multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ 
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB limit
});

// Email transporter configuration
const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Routes

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Get portfolio data
app.get('/api/portfolio', (req, res) => {
  const portfolioData = {
    personal: {
      name: 'Prudhvi Marpina',
      title: 'Data Scientist & ML Engineer',
      email: 'marpina.prudhvi@gmail.com',
      phone: '+1 (425) 463-5402',
      location: 'Seattle, WA',
      bio: 'I build intelligent systems that transform data into actionable insights. Specializing in machine learning, full-stack development, and creating scalable solutions that drive real business impact.'
    },
    stats: {
      experience: '4+',
      projects: '15+',
      successRate: '95%',
      clients: '10+'
    },
    skills: {
      programming: ['Python', 'JavaScript', 'TypeScript', 'R', 'SQL'],
      frameworks: ['React', 'Node.js', 'Express', 'FastAPI', 'Django'],
      ml: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'XGBoost', 'Pandas'],
      cloud: ['AWS', 'GCP', 'Azure', 'Docker', 'Kubernetes'],
      databases: ['PostgreSQL', 'MongoDB', 'Redis', 'BigQuery', 'Snowflake']
    }
  };
  
  res.json(portfolioData);
});

// Contact form submission
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({ 
        error: 'Missing required fields' 
      });
    }
    
    // Email configuration
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'marpina.prudhvi@gmail.com',
      subject: `Portfolio Contact: ${subject || 'New Message'}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || 'No subject'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr>
        <p><em>Sent from portfolio contact form</em></p>
      `
    };
    
    // Send email
    await transporter.sendMail(mailOptions);
    
    // Log the contact attempt
    console.log(`Contact form submission from: ${email}`);
    
    res.json({ 
      success: true, 
      message: 'Thank you for your message! I\'ll get back to you soon.' 
    });
    
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ 
      error: 'Failed to send message. Please try again.' 
    });
  }
});

// File upload endpoint (for resume, project files)
app.post('/api/upload', upload.single('file'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }
    
    const fileInfo = {
      originalName: req.file.originalname,
      size: req.file.size,
      mimetype: req.file.mimetype,
      uploadedAt: new Date().toISOString()
    };
    
    // In a real application, you'd save the file to cloud storage
    // For now, we'll just return the file info
    res.json({ 
      success: true, 
      file: fileInfo,
      message: 'File uploaded successfully' 
    });
    
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ error: 'Upload failed' });
  }
});

// Analytics endpoint (track page views, etc.)
app.post('/api/analytics', (req, res) => {
  try {
    const { event, data } = req.body;
    
    // Log analytics data
    console.log(`Analytics event: ${event}`, data);
    
    // In a real application, you'd save this to a database
    res.json({ success: true });
    
  } catch (error) {
    console.error('Analytics error:', error);
    res.status(500).json({ error: 'Analytics tracking failed' });
  }
});

// Newsletter subscription
app.post('/api/newsletter', async (req, res) => {
  try {
    const { email } = req.body;
    
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }
    
    // In a real application, you'd save this to a database
    console.log(`Newsletter subscription: ${email}`);
    
    res.json({ 
      success: true, 
      message: 'Successfully subscribed to newsletter!' 
    });
    
  } catch (error) {
    console.error('Newsletter error:', error);
    res.status(500).json({ error: 'Subscription failed' });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Something went wrong!',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📧 Email configured: ${process.env.EMAIL_USER ? 'Yes' : 'No'}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
});

module.exports = app;

