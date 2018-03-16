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

app.get('/todo',(req,res)=>{
  todo.find().then((todo)=>{
  res.send(todo);
},(err)=>{
  res.status(400).send(err);
})
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

module.exports={app};
