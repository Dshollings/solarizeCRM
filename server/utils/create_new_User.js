var bcrypt = require('bcrypt'),
    Model = require('../models'),
    passport = require('passport')

module.exports.show = function(req, res) {
  res.render('signup')
}

module.exports.signup = function(req, res) {
  var username = req.body.username
  var password = req.body.password
  var password2 = req.body.password2
  var company_name = req.body.company_name
  var email = req.body.email
  var phone = req.body.phone
  var state = req.body.state


  if (!username || !password || !password2) {
    console.log('error', "Please, fill in all the fields.")
    res.redirect('signup')
  }
  
  if (password !== password2) {
    console.log('error', "Please, enter the same password twice.")
    res.redirect('signup')
  }
  
  var salt = bcrypt.genSaltSync(10)
  var hashedPassword = bcrypt.hashSync(password, salt)
  
  var newUser = {
    user_name: username,
    user_password: hashedPassword,
    salt: salt,
    company_name: company_name,
    email: email,
    phone: phone,
    state: state
  }
  
  Model.User.create(newUser)
  .then(function() {
    res.redirect('/')
  }).catch(function(error) {
    console.log('error', "Please, choose a different username.")
    res.redirect('/signup')
  })
}

