const  router = require('express').Router()

router.get('/api/users',(req,res )=>{
  res.json('all users ')
})

router.post('/api/users',(req,res )=>{
  const {username, password}= req.body;
  if(username && password){
    return res.status(200).json('user created')
  }
  res.status(400).json('error user not created');
})

router.get('/api/users/:id',(req,res )=>{
  const {id}= req.params;
  id === "1001" ? 
      res.json('welcome user'): 
      res.status(404).json('user not found')
  
})

module.exports = router;