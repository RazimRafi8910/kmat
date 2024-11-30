import admin from 'firebase-admin';
import dotenv from 'dotenv';
dotenv.config();

const SECRETKEYS = {
    "type": process.env.TYPE,
    "project_id": process.env.PROJECT_ID,
    "private_key_id":process.env.PRIVATE_KEY_ID,
    "private_key":process.env.PRIVATE_KEY.replace(/\\n/g, '\n') ,
    "client_email": process.env.CLIENT_EMAIL,
    "client_id":process.env.CLIENT_ID ,
    "auth_uri":process.env.AUTH_URI ,
    "token_uri": process.env.TOKEN_URI,
    "auth_provider_x509_cert_url": process.env.AUTH_PROVIDER_X509_CERT_URL,
    "client_x509_cert_url": process.env.CLIENT_X509_CERT_URL,
    "universe_domain": process.env.UNIVERSE_DOMAIN
}


admin.initializeApp({
    credential: admin.credential.cert(SECRETKEYS),
    databaseURL: "https://kmat-da059.firebaseio.com",
});


const firestore = admin.firestore();
export default firestore;
