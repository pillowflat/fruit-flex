var express = require('express');
var router = express.Router();

var fruitToShow = 'banana'

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Fruit Flex', fruit: fruitToShow });
});

router.get('/fruits', function (req, res, next) {
  res.send(req.app.locals.fruits)
})

router.get('/fruit', function (req, res, next) {
  res.send({fruit: fruitToShow})
});

router.post('/fruit', function (req, res, next) {
  const fruit = req.body && req.body.fruit
  if (fruit) {
    console.log(`Changing fruit to ${fruit}`)
    fruitToShow = fruit
  }
  res.json()
})

module.exports = router;
