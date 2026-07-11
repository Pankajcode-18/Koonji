const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
  shortDescription: { type: String, required: true },
  fullDescription: { type: String, required: true },
  icon: { type: String, default: 'MdCampaign' },
  order: { type: Number, default: 0 },
  metaTitle: { type: String },
  metaDescription: { type: String },
  features: [{ type: String }],
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model('Service', serviceSchema);
