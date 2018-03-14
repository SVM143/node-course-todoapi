const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodosApp',(err,db) =>{
  if(err){
    return console.log('Unable to connect MongoDB server');
  }
  console.log('connected');
});
var user = {name:'sourav',title:'vikas'};
var {name,title}=user;
console.log(name);
console.log(title);
