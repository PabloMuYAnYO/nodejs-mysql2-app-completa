const express = require('express');
const router = express.Router();
const passport = require('passport');

/* GET users listing. */
router.get('/signup', (req, res, next) => {
  res.render('auth/signup');
});

// router.post('/signup', (req, res, next) => {
//   // console.log(req.body);
//   passport.authenticate('local.signup', {
//     successRedirect: '/profile',
//     failureRedirect: '/signup',
//     failureFlash: true
//   })
//   res.send('<h1>POSTED!!</h1>');
// });

router.post('/signup', passport.authenticate('local.signup', {
  successRedirect: '/profile',
  failureRedirect: '/signup',
  failureFlash: true
}));

router.get('/profile', (req, res) =>{
  res.send('<h1>This is your profile!</h1>');
});

module.exports = router;