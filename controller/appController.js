import firestore from "../service/firebase.js";

export const homePage = ( req, res) => {
    res.render('index.ejs');
}

export const registerPage = async (req, res) => {
    res.render('Registration.ejs')
}