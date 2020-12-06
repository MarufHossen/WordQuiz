import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'
// import "firebase/auth"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA0k2FQ0lX_qsZRUfNZakbAaMcQzCchoj8",
    authDomain: "wordquiz-77416.firebaseapp.com",
    databaseURL: "https://wordquiz-77416.firebaseio.com",
    projectId: "wordquiz-77416",
    storageBucket: "wordquiz-77416.appspot.com",
    messagingSenderId: "903758230099",
    appId: "1:903758230099:web:842268a4b377f01860cca6",
    measurementId: "G-X3W85L9VSQ"
  };


const firebaseApp =firebase.initializeApp(
    firebaseConfig
)

export const db =firebaseApp.firestore();
export const auth=firebaseApp.auth();
// export default db;