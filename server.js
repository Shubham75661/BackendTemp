const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());

var corsOptions = {
    origin: "http://localhost:3000"
  };

app.use(cors(corsOptions))

let API_VISITS = 0;

let taskArray = ['1st Task']

app.get('/', (req, res)=>{
    API_VISITS++;
    res.status(200).send(taskArray);
})

app.post('/addTask', (req, res) =>{
    const {task} = req.body;
    console.log(task, " ");
    taskArray.push(task)
    res.status(200)
})

app.post('/removetask', (req, res) =>{
    const {task} = req.body;
    const index = taskArray.indexOf(task);
    if(index > -1){
        taskArray.splice(index, 1);
    }
})

app.post('/editTask', (req, res) =>{
    const {task} = req.body;
    const index = taskArray.indexOf(task);
    if(index > -1){
       taskArray[index] = task;
    }
})

app.listen(3001, () =>{
    console.log("listning to port 3001");
})