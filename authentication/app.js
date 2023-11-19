const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const config =  require('./config');
const PORT = 8000;

const app = express();

mongoose.connect(config.dbUrl, {})
  .then(() =>{
    console.log('connected to db')
  })
  .catch((error) =>{
    console.log('error:', error)
  });

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(session ({ secret: config.sessionSecret, resave:true, saveUninitialized: true }));

// routes
const homeRoutes = require('./routes/home');
const indexRoutes = require('./routes/index');
const userRoutes = require('./routes/user');
const authRoutes = require('./routes/auth');

app.use('/', indexRoutes);
app.use('/home', homeRoutes);
app.use('/user', userRoutes);
app.use('/auth', authRoutes);

app.listen(PORT, ()=>{
    console.log(`server is running in ${PORT}`)
});
