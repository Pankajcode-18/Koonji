const express = require('express');
const router = express.Router();
const TeamMember = require('../models/TeamMember');

// GET /api/team
router.get('/', async (req, res, next) => {
  try {
    const team = await TeamMember.find({ isActive: true }).sort({ order: 1 });
    res.json({ success: true, data: team });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
