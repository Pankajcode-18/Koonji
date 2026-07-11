const express = require('express');
const router = express.Router();
const PortfolioItem = require('../models/PortfolioItem');

// GET /api/portfolio?category=Branding&limit=4
router.get('/', async (req, res, next) => {
  try {
    const { category, limit, featured } = req.query;
    const query = {};
    if (category && category !== 'All') query.category = category;
    if (featured === 'true') query.featured = true;

    let dbQuery = PortfolioItem.find(query).sort({ date: -1 });
    if (limit) dbQuery = dbQuery.limit(parseInt(limit));

    const items = await dbQuery;
    res.json({ success: true, data: items });
  } catch (err) {
    next(err);
  }
});

// GET /api/portfolio/:id
router.get('/:id', async (req, res, next) => {
  try {
    const item = await PortfolioItem.findById(req.params.id);
    if (!item) return res.status(404).json({ success: false, message: 'Portfolio item not found' });
    res.json({ success: true, data: item });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
