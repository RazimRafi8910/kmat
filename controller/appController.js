import firestore from '../service/firebase.js';

export const homePage = ( req, res) => {
    res.render('index.ejs');
}

export const registerPage = (req, res) => {
    res.render('Registration.ejs')
}

export const examPatterPage = (req, res) => {
    res.render('ExamPattern.ejs')
}

export const aboutPage = (req, res) => {
    res.render('about.ejs')
}

export const contactPage = (req, res) => {
    res.render('Contact.ejs')
}

export const registerUser = async (req, res) => {
    const data = req.body;
    try {
        const docRef = await firestore.collection('EMETregistrations').add(data);
        res.status(200).json({ message: 'User added', status:true});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'server Error',status:false});
    }
}