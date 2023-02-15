const express = require('express');
const router = express.Router();

const pool = require('../database')

/* GET users listing. */
router.get('/', async (req, res, next) => {
  const [ links ] = await pool.query('SELECT * FROM links')
  res.json(links)
  //res.send('LINKS!!!');
});

router.get('/add', (req, res) => {
  res.render('links/add')
})

router.post('/add', async (req, res) => {
  const { title, url, description } = req.body;
  const newLink = {
    title,
    url,
    description
  }
  // console.log(newLink);
  await pool.query('INSERT INTO links SET ?', [newLink]);
  res.send('<h1>Received</h1>')
})

module.exports = router;