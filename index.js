import cookieParser from 'cookie-parser';
import express from 'express';
import dotenv from 'dotenv';
import appRouter from './routes/appRoutes.js'
import path from 'path'
import { fileURLToPath } from 'url';

const app = express()

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 5000
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', appRouter);


app.get('/register', (req, res) => {
    res.render('Registration');
})

// app.listen(5000, () => {
//     console.log(`server listening on ${PORT}`);
// })

export default app