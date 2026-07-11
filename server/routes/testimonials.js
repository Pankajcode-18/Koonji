const express = require('express');
const router = express.Router();
const Testimonial = require('../models/Testimonial');

// GET /api/testimonials
router.get('/', async (req, res, next) => {
  try {
    const testimonials = await Testimonial.find({ isActive: true }).sort({ order: 1 });
    res.json({ success: true, data: testimonials });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
