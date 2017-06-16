var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// 27017 is default mongo port
mongoose.connect('localhost:/27017/meanie');

var peepsSchema = new mongoose.Schema({
  name: String,
  location: String
});

var peepsModel = mongoose.model('peepsModel', peepsSchema);

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.delete('/:id', function(req, res){
  console.log('req.body: ', req.body);
  peepsModel.remove({_id:req.params.id}).then(function(){
    res.send(200);
  });
});


module.exports = router;
