express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const e = require('express');
app.use(express.json());

const users = []

app.get('/', (req, res) => {
  res.send("welcome");
});

app.get('/data', (req, res) => {
  res.json(users);
});

app.post('/users',async (req, res) => {
try{

 const hashedPassword = await bcrypt.hash(req.body.password, 10);
 
  const user = {name: req.body.name, password: hashedPassword}
  
  console.log(user);
  console.log(hashedPassword);

 users.push(user);
 res.status(201).send('User added');
} catch{
   res.status(500).send("error");
}

});

app.post('/users/login', async (req, res) => {
   const user = users.find(user => user.name === req.body.name);
   if(user == null){
    return res.status(400).send('Cannot find user');
   }
   try{
     if ( await bcrypt.compare(req.body.password, user.password))
      res.send('Success');
   else{
      res.send('Not Allowed');
   }
   }
   catch{
res.status(500).send("error");
   }
});
app.listen(3070, '0.0.0.0',()=> {
  console.log(`✅ Server is listening on http://localhost:${3070}`);
});

