import express from 'express';
import { aboutPage, contactPage, examPatterPage, homePage, registerPage, registerUser } from '../controller/appController.js';

const router = express.Router()


router.get('/', homePage);
router.get('/about', aboutPage);
router.get('/exam-pattern', examPatterPage);
router.get('/contact', contactPage);
router.get('/', homePage);
router.get('/registration', registerPage);
router.post('/register', registerUser);


export default router