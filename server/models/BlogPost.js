const mongoose = require('mongoose');

const blogPostSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
  excerpt: { type: String, required: true },
  content: { type: String, required: true },
  coverImage: { type: String },
  category: { type: String, required: true },
  author: { type: String, default: 'Koonji Infotech' },
  publishedAt: { type: Date, default: Date.now },
  readTime: { type: Number, default: 5 },
  tags: [{ type: String }],
  isPublished: { type: Boolean, default: true },
  metaTitle: { type: String },
  metaDescription: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('BlogPost', blogPostSchema);
