import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyA_g-uVi5jSrc14Aeb4Bh-yaFOXHtTtKXk",
  authDomain: "forms-test-92d05.firebaseapp.com",
  databaseURL: "https://forms-test-92d05.firebaseio.com",
  projectId: "forms-test-92d05",
  storageBucket: "forms-test-92d05.appspot.com",
  messagingSenderId: "258260526028"
};


firebase.initializeApp(config);

const firebaseDB = firebase.database();
const googleAuth = new firebase.auth.GoogleAuthProvider();

export {
  firebase,
  firebaseDB,
  googleAuth
}

// firebaseDB.ref('users').orderByChild('lastname').equalTo('Ball').once('value')
// .then((snapshot)=>{
//   console.log(snapshot.val());
// })