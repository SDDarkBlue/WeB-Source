var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
 // res.send({carry:'sccc'})
 res.render('index',{
  title:'My App!',
  age: 27

  
 });
//console.log(req.query) //localhost:8000/?age=33&name=will
 
//router.get('/user/:id', function(req, res) {
//  console.log(req.params);//localhost:8000/user/33---show{ id:'33'}
//  res.send(req.params.id,200)//response u the id u write in the url
//});

});


module.exports = router;
