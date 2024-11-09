import path from 'path';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import model from './Models/Todo.js'; // Ensure the file extension is included for ES modules
import dotenv from 'dotenv';

dotenv.config();

const port = 3000;
const app = express();

app.use(cors());
app.use(express.json());

const _dirname = path.resolve();

mongoose.connect(`mongodb+srv://shresthjindal28:${process.env.DB_PASSWORD}@merntech.vw6eb.mongodb.net/?retryWrites=true&w=majority&appName=merntech`);

app.get('/get', (req, res) => {
    model.find().then(data => {
        res.json(data);
    }).catch(err => {
        res.send(err);
    });
});

app.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    model.findByIdAndDelete(id).then(() => {
        res.send('Task deleted');
    }).catch(err => {
        res.send(err);
    });
});

app.post('/create', (req, res) => {
    const task = req.body.task;
    model.create({ task: task }).then(() => {
        res.send('Task created');
    }).catch(err => {
        res.send(err);
    });
});

app.use(express.static(path.join(_dirname, '/Server/dist')));

app.get('*', (_, res) => {
    res.sendFile(path.resolve(_dirname, '/Server/dist/index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
