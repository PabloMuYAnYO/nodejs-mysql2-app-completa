const express = require('express');
const router = express.Router();


/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send(`<h1>User's current device: ${req.device.type} device </h1>`);
});

module.exports = router;