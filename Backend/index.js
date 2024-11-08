const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const model = require('./Models/Todo');


const app = express();
app.use(cors());
app.use(express.json())


const port = 3000;

 mongoose.connect('mongodb://localhost:27017/create')

app.get('/get', (req, res) => {
    model.find().then(data => {
        res.json(data)
    }).catch(err => {
        res.send(err)
    })
})

app.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    model.findByIdAndDelete(id).then(() => {
        res.send('Task deleted')
    }).catch(err => {
        res.send(err)
    })
})

app.post('/create', (req, res) => {
    const task = req.body.task;
    model.create({task: task}).then(() => {
        res.send('Task created')
    }).catch(err => {
        res.send(err)
    })
})


app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})