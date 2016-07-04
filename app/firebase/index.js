import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyD2XZVKNO1AXucYIGgVLjngnUOzg0cP3m0",
    authDomain: "todoapp-2880f.firebaseapp.com",
    databaseURL: "https://todoapp-2880f.firebaseio.com",
    storageBucket: "todoapp-2880f.appspot.com",
  };
  firebase.initializeApp(config);

export var firebaseRef = firebase.database().ref();

export default firebase;
