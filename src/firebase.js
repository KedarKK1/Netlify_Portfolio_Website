// import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import {initializeApp} from 'firebase/app';
import { getFirestore } from "firebase/firestore"
require('firebase/database');
// require('firebase/auth');

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// use correct environment variable names else it will not work 
const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APPID,
    measurementId: process.env.REACT_APP_MEASUREMENTID
};

// firebase.initializeApp(firebaseConfig);

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

// export default firebase;