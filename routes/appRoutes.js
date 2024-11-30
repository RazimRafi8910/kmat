import express from 'express';
import { aboutPage, contactPage, cutOffPage, examPatterPage, getRegiesterdData, homePage, markingSchemePage, privacyPage, registerPage, registerUser } from '../controller/appController.js';

const router = express.Router()


router.get('/', homePage);
router.get('/about', aboutPage);
router.get('/exam-pattern', examPatterPage);
router.get('/cutoff', cutOffPage);
router.get('/marking-scheme', markingSchemePage);
router.get('/privacy-policy',privacyPage);
router.get('/contact', contactPage);
router.get('/', homePage);
router.get('/registration', registerPage);
router.post('/register', registerUser);

// admin
router.get('/admin/getData/:id', getRegiesterdData);

export default router