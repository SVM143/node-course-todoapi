var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {todo} = require('./models/todo');
var {user} = require('./models/users');

var app = express();

app.use(bodyParser.json());

app.post('/todo',(req,res) =>{
  var Todo = new todo({
    text:req.body.text
  });

  Todo.save().then((doc)=>{
    res.send(doc);
  },(err)=>{
    res.send(err);
  });
});
app.listen(3000,()=>{
  console.log('Started');
});
//  var othertodo = new todo({
//    text:'Cook dinner'
//  });
//
//  othertodo.save().then((doc)=>{
//    console.log(JSON.stringify(doc,undefined,2));
//  },(err)=>{
//    console.log('unable to save');
//  })
