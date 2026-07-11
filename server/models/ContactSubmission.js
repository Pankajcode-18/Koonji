const mongoose = require('mongoose');

const contactSubmissionSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true },
  company: { type: String, trim: true, default: '' },
  serviceInterest: { type: String, default: 'General Inquiry' },
  projectDetails: { type: String, required: true },
  submittedAt: { type: Date, default: Date.now },
  status: {
    type: String,
    enum: ['new', 'read', 'responded'],
    default: 'new',
  },
  ipAddress: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('ContactSubmission', contactSubmissionSchema);
