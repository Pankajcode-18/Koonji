const mongoose = require('mongoose');

const portfolioItemSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  category: {
    type: String,
    enum: ['Branding', 'Performance', 'Video', 'Digital'],
    required: true,
  },
  description: { type: String, required: true },
  images: [{ type: String }],
  client: { type: String },
  challenge: { type: String },
  solution: { type: String },
  results: { type: String },
  date: { type: Date, default: Date.now },
  featured: { type: Boolean, default: false },
  order: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('PortfolioItem', portfolioItemSchema);
