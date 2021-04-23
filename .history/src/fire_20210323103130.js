import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyA8rSkVZ2Ils_2KGl6lnWDAJ_8olb3YDqo",
    authDomain: "stock-screener-558d3.firebaseapp.com",
    projectId: "stock-screener-558d3",
    storageBucket: "stock-screener-558d3.appspot.com",
    messagingSenderId: "904065297026",
    appId: "1:904065297026:web:53a782d4e8ea9f12d7229b"
  };
 
 const fire = firebase.initializeApp(firebaseConfig);

 export default fire