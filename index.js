import cookieParser from 'cookie-parser';
import express from 'express';
import dotenv from 'dotenv';
import appRouter from './routes/appRoutes.js'

const app = express()

dotenv.config();

const PORT = process.env.PORT || 5000

app.set('view engine', 'ejs');
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));


app.use('/', appRouter);


app.get('/register', (req, res) => {
    res.render('Registration');
})

app.listen(5000, () => {
    console.log(`server listening on ${PORT}`);
})