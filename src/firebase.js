import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

var firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'slack-chat-app-765e8.firebaseapp.com',
  databaseURL: 'https://slack-chat-app-765e8.firebaseio.com',
  projectId: 'slack-chat-app-765e8',
  storageBucket: 'slack-chat-app-765e8.appspot.com',
  messagingSenderId: '73573684477',
  appId: '1:73573684477:web:c1c2edd8d0310311005a94',
  measurementId: 'G-HKYXHRLD0V',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;
