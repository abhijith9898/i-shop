var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

  let products = [
    {
      name:"lorem",
      description:"This is a good phone",
      category:"Mobile",
      image:"https://images.moneycontrol.com/static-mcnews/2020/09/Realme-7-Pro-1.jpg"
    },
    {
      name:"lorem",
      description:"This is a good phone",
      category:"Mobile",
      image:"https://images.moneycontrol.com/static-mcnews/2020/09/Realme-7-Pro-1.jpg"
    },
    {
      name:"lorem",
      description:"This is a good phone",
      category:"Mobile",
      image:"https://images.moneycontrol.com/static-mcnews/2020/09/Realme-7-Pro-1.jpg"
    },
    {
      name:"lorem",
      description:"This is a good phone",
      category:"Mobile",
      image:"https://images.moneycontrol.com/static-mcnews/2020/09/Realme-7-Pro-1.jpg"
    },

  ]

  res.render('index', {products,admin:false});
});

module.exports = router;
