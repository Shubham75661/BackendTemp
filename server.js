const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors())

let API_VISITS = 0;

app.get('/', (req, res)=>{
    API_VISITS++;
    res.status(200).send({API_VISITS});
})

app.post('/user', (req, res) =>{
    const {username, Age} = req.body;
    console.log(username, " ", Age);
    res.send({API_VISITS})
})

app.listen(3001, () =>{
    console.log("listning to port 3001");
})