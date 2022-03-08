const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index.html', { title: 'Fcowav | Mankeke' });
});

module.exports = router;