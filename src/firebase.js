import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB0WpyA_HdikAY1huD7KGVRC_68WHoyCa8",
    authDomain: "emoji-search-7dea4.firebaseapp.com",
    projectId: "emoji-search-7dea4",
    storageBucket: "emoji-search-7dea4.appspot.com",
    messagingSenderId: "155199759270",
    appId: "1:155199759270:web:95a427c040e272eab72567",
    measurementId: "G-BHG00RMQL2"
});


const db = firebaseApp.firestore();

export {
    db
};