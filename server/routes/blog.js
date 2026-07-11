const express = require('express');
const router = express.Router();
const BlogPost = require('../models/BlogPost');

// GET /api/blog?limit=3&category=Digital
router.get('/', async (req, res, next) => {
  try {
    const { limit, category } = req.query;
    const query = { isPublished: true };
    if (category) query.category = category;

    let dbQuery = BlogPost.find(query).sort({ publishedAt: -1 });
    if (limit) dbQuery = dbQuery.limit(parseInt(limit));

    const posts = await dbQuery;
    res.json({ success: true, data: posts });
  } catch (err) {
    next(err);
  }
});

// GET /api/blog/:slug
router.get('/:slug', async (req, res, next) => {
  try {
    const post = await BlogPost.findOne({ slug: req.params.slug, isPublished: true });
    if (!post) return res.status(404).json({ success: false, message: 'Post not found' });
    res.json({ success: true, data: post });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
