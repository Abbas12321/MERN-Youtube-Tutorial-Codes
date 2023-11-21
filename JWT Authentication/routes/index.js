const express = require('express');
const router = express.Router();
const auth = require('../auth');
const User = require('../models/User');

// Home page
router.get('/', auth.verifyToken, (req, res) => {
  res.render('index', { user: req.user });
});

router.get('/admin', auth.verifyToken, auth.authorize('admin'), (req, res) =>{
  res.render('admin', { user: req.user });
})

// Signup page
router.get('/signup', (req, res) => {
  res.render('signup');
});

router.post('/signup', async (req, res) => {
  const { username, password, role } = req.body;

  try {
    const user = await User.create({ username, password, role });
    const token = auth.generateToken({ username, role });
    console.log("token", token)
    console.log('User created:', user);
    res.cookie('token', token);
    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.redirect('/signup');
  }
});

// Login page
router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username, password });

  if (user) {
    const token = auth.generateToken({ username, role: user.role });
    console.log("token", token)
    console.log('Login successful:', user);
    res.cookie('token', token);
    res.redirect('/');
  } else {
    console.log('Login failed');
    res.redirect('/login');
  }
});

// Logout
router.get('/logout', (req, res) => {
    res.clearCookie('token')
    res.redirect('/');
});

module.exports = router;
