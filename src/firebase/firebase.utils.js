import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
    apiKey: "AIzaSyDVrx0nE_0-ZKSfTKykWmStF6HuHPSzkY0",
    authDomain: "crwn-db-84ba7.firebaseapp.com",
    projectId: "crwn-db-84ba7",
    storageBucket: "crwn-db-84ba7.appspot.com",
    messagingSenderId: "34786378557",
    appId: "1:34786378557:web:179fe7294eb5320b467b54",
    measurementId: "G-GM62L3492F",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
