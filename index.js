const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const sendEmail = require('./utils/sendmail.js');

dotenv.config();

const app = express();

// CORS configuration
app.use(cors({
    origin: 'http://localhost:5173', // Vite's default port
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

const PORT = process.env.PORT || 3000;

// Input validation middleware
const validateEmailInput = (req, res, next) => {
    const { name, email, message } = req.body;

    if (!name || typeof name !== 'string' || name.trim().length === 0) {
        return res.status(400).json({
            success: false,
            message: 'Please provide a valid name'
        });
    }

    if (!email || typeof email !== 'string' || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        return res.status(400).json({
            success: false,
            message: 'Please provide a valid email address'
        });
    }

    if (!message || typeof message !== 'string' || message.trim().length === 0) {
        return res.status(400).json({
            success: false,
            message: 'Please provide a message'
        });
    }

    next();
};

app.post('/api/mail', validateEmailInput, async(req, res) => {
    const { name, email, message, phone } = req.body;

    try {
        const formattedMessage = `
Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}\n` : ''}
Message:
${message}
        `;

        await sendEmail({
            email: process.env.ADMIN_EMAIL || 'arbabjavaid4@gmail.com',
            subject: `New Contact Form Submission from ${name}`,
            message: formattedMessage,
            userEmail: email
        });

        res.status(200).json({
            success: true,
            message: 'Thank you for your message! We will get back to you soon.'
        });
    } catch (error) {
        console.error('Error in /api/mail route:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to send message. Please try again later.'
        });
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Unhandled error:', err);
    res.status(500).json({
        success: false,
        message: 'An unexpected error occurred. Please try again later.'
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});