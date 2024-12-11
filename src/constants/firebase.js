// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {

    getAuth,

    signInWithEmailAndPassword,
    signOut,

} from "firebase/auth";
import {
    getFirestore,
} from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
// import useFirebaseAuthStateChange from "../components/hooks/useFirebaseAuthStateChange";




const firebaseConfig = {
    apiKey: "AIzaSyA6bkGQw0xWJ73DWfvbD68RMPeATVB-k1Q",
    authDomain: "kc-enterprise-thrissur.firebaseapp.com",
    projectId: "kc-enterprise-thrissur",
    storageBucket: "kc-enterprise-thrissur.firebasestorage.app",
    messagingSenderId: "857639543152",
    appId: "1:857639543152:web:249f9710420bdb6c0f2fb5",
    measurementId: "G-5ER1MJPPR4"
  };
export const signinWithFirebase = async (emailId, password) => {
    
    try {
        const user = await signInWithEmailAndPassword(auth, emailId, password);      
        return user

    } catch (err) {
        console.log(err)
        localStorage.setItem("isLogged",false)
        return err
    }

}

export const signoutFirebase = async () => {
    try {       
        const data = await signOut(auth)
        console.log("logged out")
        localStorage.setItem("isLogged",false)
        
        return data
    } catch (err) {
        console.log(err)
    }
}



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const database = getDatabase();



