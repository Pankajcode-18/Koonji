const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');
const ContactSubmission = require('../models/ContactSubmission');

const validate = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().normalizeEmail().withMessage('Valid email is required'),
  body('projectDetails').trim().notEmpty().withMessage('Project details are required'),
];

const createTransporter = () => nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT),
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// POST /api/contact
router.post('/', validate, async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ success: false, errors: errors.array() });
  }

  try {
    const { name, email, company, serviceInterest, projectDetails } = req.body;

    // Save to MongoDB
    const submission = await ContactSubmission.create({
      name, email, company, serviceInterest, projectDetails,
      ipAddress: req.ip,
    });

    // Send email notifications (non-blocking — don't fail the request if email fails)
    try {
      const transporter = createTransporter();

      // Admin notification
      await transporter.sendMail({
        from: `"Koonji Infotech Website" <${process.env.EMAIL_USER}>`,
        to: process.env.ADMIN_EMAIL,
        subject: `New Contact Form Submission — ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || 'Not provided'}</p>
          <p><strong>Service Interest:</strong> ${serviceInterest || 'General Inquiry'}</p>
          <p><strong>Project Details:</strong></p>
          <p>${projectDetails}</p>
          <hr/>
          <p><em>Submitted at ${new Date().toLocaleString()}</em></p>
        `,
      });

      // Auto-reply to user
      await transporter.sendMail({
        from: `"Koonji Infotech" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: `We received your message — Koonji Infotech`,
        html: `
          <h2>Thank you, ${name}!</h2>
          <p>We've received your enquiry and our team will be in touch within 24 hours.</p>
          <p>In the meantime, explore our latest work at <a href="https://koonji.com">koonji.com</a>.</p>
          <br/>
          <p>Warm regards,<br/><strong>The Koonji Infotech Team</strong></p>
        `,
      });
    } catch (emailError) {
      console.warn('Email sending failed (non-critical):', emailError.message);
    }

    res.status(201).json({
      success: true,
      message: 'Thank you! We\'ll be in touch within 24 hours.',
      data: { id: submission._id },
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
