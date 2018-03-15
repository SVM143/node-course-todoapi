const expect = require('expect');
const request = require('supertest');
const {app}=require('./../server');
const {todo}= require('./../models/todo');

beforeEach((done)=>{
  todo.remove({}).then(()=>done());
});
describe('POST /todo',() =>{
  it('should create a new todo',(done)=>{
    var text= 'Test todo test';

    request(app)
    .post('/todo')
    .send({text})
    .expect(200)
    .expect((res) =>{
      expect(res.body.text).toBe(text)
    })
    .end((err, res) => {
      if(err){
        return done(err);
      }
      todo.find().then((todo) =>{
        expect(todo.length).toBe(1);
        expect(todo[0].text).toBe(text);
        expect(todo[0].text.length).toNotBe(0);
        done();
      }).catch((e)=>done(e));
    });

  })
})
