import firestore from "../service/firebase.js";

export const homePage = ( req, res) => {
    res.render('index.ejs');
}

export const registerPage = async (req, res) => {
    try {
        const docRef = await firestore.collection('users').add({
             name:"razim",
             email:"testing@gmail.com",
            createdAt: admin.firestore.FieldValue.serverTimestamp()
        });
        res.status(200).json({ message: 'User added', id: docRef.id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    res.render('Registration.ejs')
}