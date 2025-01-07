const express = require('express');

const port = 3000;
const app = express();
app.use(express.json());

let users=[
    {"name" : "nikhila" , "id" : "19"},
    {"name" : "valli" , "id" : "20"}
];

app.get('/users',(req,res) => {
  res.send(users);
});

app.get('/', (req, res) => {
  if (req.url==='/about'){
    res.send('This is about page');
  }
});

app.get('/about', (req, res) => {
    res.send('This is about page');
});

app.put('/users/:id', (req, res) => {
    const user = users.fin

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});