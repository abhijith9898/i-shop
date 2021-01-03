var express = require('express');
var router = express.Router();
var productHelper = require('../helpers/product-helpers');
/* GET users listing. */


router.get('/', function (req, res, next) {

  let products = [
    {
      name: "lorem",
      description: "This is a good phone",
      category: "Mobile",
      image: "https://images.moneycontrol.com/static-mcnews/2020/09/Realme-7-Pro-1.jpg"
    },
    {
      name: "lorem",
      description: "This is a good phone",
      category: "Mobile",
      image: "https://images.moneycontrol.com/static-mcnews/2020/09/Realme-7-Pro-1.jpg"
    },
    {
      name: "lorem",
      description: "This is a good phone",
      category: "Mobile",
      image: "https://images.moneycontrol.com/static-mcnews/2020/09/Realme-7-Pro-1.jpg"
    },
    {
      name: "lorem",
      description: "This is a good phone",
      category: "Mobile",
      image: "https://images.moneycontrol.com/static-mcnews/2020/09/Realme-7-Pro-1.jpg"
    },

  ]

  res.render('admin/view-products', { admin: true, products })

});

router.get('/add-product', function (req, res) {
  res.render('admin/add-product')
});

router.post('/add-product', function (req, res) {
  //console.log(req.body);
  //console.log(req.files.Image);

  productHelper.addProduct(req.body, (id) => {
    let image = req.files.Image;
    image.mv('./public/images/' + id + '.jpg', (err, done) => {
      if (!err) {
        res.render('admin/add-product')
      }
      else {
        console.log(err);
      }

    })

  })

});

module.exports = router;