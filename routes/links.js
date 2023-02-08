const express = require('express');
const router = express.Router();


/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send(`<h1> LINKS PAGE!!! </h1>`);
});

module.exports = router;