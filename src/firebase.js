import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyApHpS87p_8dM8sg1TihH13_o98FxEVod0',
  authDomain: 'tiktok-clone-17e41.firebaseapp.com',
  projectId: 'tiktok-clone-17e41',
  storageBucket: 'tiktok-clone-17e41.appspot.com',
  messagingSenderId: '1030179485044',
  appId: '1:1030179485044:web:8cbb31bdd54755f8f76821',
  measurementId: 'G-J0PNL16NKN',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
