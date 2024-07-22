// src/server.ts
import express from 'express';
import router from './router';
import morgan from 'morgan';
import protect from './middlewares/protect'; // Ensure the correct path

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    req.shhhh_secret = 'doggyShart';
    next();
});

app.get('/', (req, res) => {
    console.log('Hello From express server');
    res.status(200).json({ message: 'Hello From the other side' });
});

app.use('/api', protect, router);

export default app;
