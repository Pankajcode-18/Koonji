const express = require('express');
const router = express.Router();
const Milestone = require('../models/Milestone');

// GET /api/milestones
router.get('/', async (req, res, next) => {
  try {
    const milestones = await Milestone.find().sort({ order: 1 });
    res.json({ success: true, data: milestones });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
