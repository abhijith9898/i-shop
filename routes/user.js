var express = require('express');
var router = express.Router();
const productHelpers = require('../helpers/product-helpers');

/* GET home page. */
router.get('/', function (req, res, next) {

  productHelpers.getAllProducts().then((products)=>{
    console.log(products)
    res.render('user/view-products', { admin: false, products })
  })
});

/* GET login page */
router.get('/login', (req, res, next)=>{
  res.render('user/login')
});

/* GET signup page */
router.get('/signup', (req, res, next)=>{
  res.render('user/signup')
});

router.post('/signup', (req, res)=>{
  
})

module.exports = router;
