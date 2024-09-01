// Import the functions you need from the SDKs you need
import { initializeApp,FirebaseError } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth,signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)

const signup = async(name:string,email:string,password:string)=>{
    try{
        const response = await createUserWithEmailAndPassword(auth,email,password);
       
        if(response.user){

            // The next line is what gives a value to the displayName which is coming from the response.user

            await updateProfile(response.user,{displayName:name})
            const user = response.user;
       await addDoc(collection(db,'users'),{
            uid:user.uid,
            name,
            email,
            authProvider:'local'
        })
            console.log('user added to firestore successfully');
         } 
      }catch(err:unknown){
       if(err instanceof FirebaseError){
       
        toast.error(err.code.split('/')[1].split('-').join(' '));
       }else{
      
        toast.error(String(err))
       }
    }
}

const login = async(email:string,password:string)=>{
    try{
        await signInWithEmailAndPassword(auth,email,password);
    }catch(err:unknown){
       if(err instanceof FirebaseError){
        console.log('wodfd')
        toast.error(err.code.split('/')[1].split('-').join(' '));
       }else{
        console.log('worker')
        toast.error(String(err));
       }
    }
}

const logout = async()=>{
   const val =  await signOut(auth);
   console.log('after logged out::',val)
   
}

export {signup,login,logout,auth,db}