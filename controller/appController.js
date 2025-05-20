import firestore from '../service/firebase.js';
import sendEmail from '../service/nodemailer.js';
import dotenv from 'dotenv';
dotenv.config()

export const homePage = ( req, res) => {
    res.render('index.ejs');
}

export const registerPage = (req, res) => {
    res.render('Registration.ejs')
}

export const markingSchemePage = (req, res) => {
    res.render('MarkingScheme.ejs')
}

export const cutOffPage = (req, res) => {
    res.render('CutOff.ejs')
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

export const privacyPage = (req, res) => {
    res.render('PrivacyPolicy.ejs')
}

export const registerUser = async (req, res) => {
    const data = req.body;
    // send email to registered candidate
    sendEmail(data);
    const date = new Date();
    try {
        const docRef = await firestore.collection('EMETregistrations').add({...data, registerDate: date });
        console.log('Document written with ID: ', docRef.id);
        res.status(200).json({ message: 'User added', status:true});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'server Error',status:false});
    }
}

export const getRegiesterdData = async (req, res) => {
    try {
        const id = req.params.id;
        const adminID = process.env.ADMIN_ID;
        if (adminID != id) {
            return res.status(401).json({ message: "invalid id" });
        }
        console.log('user logged in admin, ip:', req.ip);
        // get all the data from firestore
        const dbRef = firestore.collection('EMETregistrations');
        const snapShot = await dbRef.get();
        const data = snapShot.docs.map((doc) => {
            return doc.data()
        })
        res.render('viewData.ejs',{data})
        // return res.status(200).json({message:'done',datas:data})
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'server Error',status:false})
    }
}