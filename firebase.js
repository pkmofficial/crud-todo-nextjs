// import { initializeApp } from 'firebase/app'
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBRuoWhFGL8JJACFAo40rVFge_R2XKfkOs",
    authDomain: "todo-crud-750d2.firebaseapp.com",
    projectId: "todo-crud-750d2",
    storageBucket: "todo-crud-750d2.appspot.com",
    messagingSenderId: "33453766174",
    appId: "1:33453766174:web:e7bfb3fbb3e9d8fa77e00f"
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)
