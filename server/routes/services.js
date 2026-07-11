const express = require('express');
const router = express.Router();
const Service = require('../models/Service');

// GET /api/services
router.get('/', async (req, res, next) => {
  try {
    const services = await Service.find({ isActive: true }).sort({ order: 1 });
    res.json({ success: true, data: services });
  } catch (err) {
    next(err);
  }
});

// GET /api/services/:slug
router.get('/:slug', async (req, res, next) => {
  try {
    const service = await Service.findOne({ slug: req.params.slug, isActive: true });
    if (!service) return res.status(404).json({ success: false, message: 'Service not found' });
    res.json({ success: true, data: service });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
