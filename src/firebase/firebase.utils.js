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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (userAuth) {
        const userRef = firestore.doc(`users/${userAuth.uid}`);

        const snapshot = await userRef.get();

        if (!snapshot.exists) {
            const { displayName, email } = userAuth;
            const createdAt = new Date();

            try {
                await userRef.set({
                    displayName,
                    email,
                    createdAt,
                    ...additionalData,
                });
            } catch (e) {
                console.log("error creating user", e.message);
            }
        }

        return userRef;
    }
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
