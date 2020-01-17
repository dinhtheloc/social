import firebase from 'firebase';
// import serviceAccount from "./serviceAccountKey.json";
// 
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://cayghe-621b3.firebaseio.com"
// });

const firebaseConfig = {
  apiKey: "AIzaSyC8lY4NXF7uXA_JELbtABo2VH21Il9bflo",
  authDomain: "cayghe-621b3.firebaseapp.com",
  databaseURL: "https://cayghe-621b3.firebaseio.com",
  projectId: "cayghe-621b3",
  storageBucket: "cayghe-621b3.appspot.com",
  messagingSenderId: "99208877422",
  appId: "1:99208877422:web:24b07d6b917e510f441d7f",
  measurementId: "G-QTJQZ5ZPKM"
};

firebase.initializeApp(firebaseConfig);

export default firebase;