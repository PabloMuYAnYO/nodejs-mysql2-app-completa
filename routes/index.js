const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.send('<h1>LINKS PAGE!!</h1>')  
});

module.exports = router;
