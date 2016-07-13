import firebase from 'firebase';

var config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    storageBucket: process.env.STORAGE_BUCKET
  };
  firebase.initializeApp(config);

export var githubProvider = new firebase.auth.GithubAuthProvider();
export var firebaseRef = firebase.database().ref();




export default firebase;
