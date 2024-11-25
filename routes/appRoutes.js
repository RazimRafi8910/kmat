import express from 'express';
import { homePage, registerPage } from '../controller/appController.js';

const router = express.Router()


router.get('/', homePage);
router.get('/registration', registerPage);


export default router