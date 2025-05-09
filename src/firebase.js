// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "netflix-clone-e2ba5.firebaseapp.com",
    projectId: "netflix-clone-e2ba5",
    storageBucket: "netflix-clone-e2ba5.firebasestorage.app",
    messagingSenderId: "105666550530",
    appId: "1:105666550530:web:f983340e6200792557001b"

  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
const db = getFirestore(app)


const signUp = async (name,email,password)=>{
    try {
        const res = await createUserWithEmailAndPassword(auth,email,password)
        const user = res.user
        await addDoc(collection(db,"user"),{
            uid:user.uid,
            name,
            authProvider:"local",
            email,
        })
        toast.success('Account Created Succesfully');
    } catch (error) {
        toast.error(error.code.split('/')[1].split('-').join(" "))     
    }
}

const login = async(email,password)=>{
    try {
        await signInWithEmailAndPassword(auth,email,password)
    } catch (error) {
        toast.error(error.code.split('/')[1].split('-').join(" "))
        
    }
}

const logOut = async()=>{
    signOut(auth)
}

export {auth,db,login,signUp,logOut}