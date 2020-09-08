const request = require('supertest')
const {app}     = require('../src/app')

//test all users
describe('/GET /api/users',()=>{
  it("response all users", (done) => {
    request(app)
      .get("/api/users")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done)
    });
})

describe('/GET /api/users/:id',()=>{
    it('response a sinple user with id', done=>{
        request(app)
        .get('/api/users/1001')
        .set('Accept','application/json')
        .expect("Content-Type", /json/)
        .expect(200, done)
    });

    it("respond with json user not found when the user does not exists", (done) => {
      request(app)
        .get("/api/users/nonexistinguser")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(404)
        .expect('"user not found"')
        .end((err) => {
          if (err) return done(err);
          done();
        });
    });
})

describe('POST /api/users',()=>{
   it('create a new user ',(done)=>{
      request(app)
       .post('/api/users')
       .set('Accept','applicacion/json')
       .send({username:'leonardo', password:'123'})
       .expect('Content-Type',/json/)
       .expect(200)
       .end(err=>{
         if(err) return done(err)
         done()
       })
   })
   it('user no create with code 400',(done)=>{
       request(app)
        .post('/api/users')
        .send({})
        .set('Accept','application/json')
        .expect('Content-Type',/json/)
        .expect('"error user not created"')
        .expect(400)
        .end(err=>{
          if(err) return done(err)
          done()
        })
   })
})