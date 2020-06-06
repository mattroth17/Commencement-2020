import firebase from 'firebase';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyAP-nDM9FJfyIlFl3rPXYPUMUJxq_LpkjI",
    authDomain: "commencement-2020.firebaseapp.com",
    databaseURL: "https://commencement-2020.firebaseio.com",
    projectId: "commencement-2020",
    storageBucket: "commencement-2020.appspot.com",
    messagingSenderId: "268444152459",
    appId: "1:268444152459:web:ddfb1b66eec2c0518eda8e",
    measurementId: "G-6DQKFV0MDS"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const database = firebase.database();


export function fetchPending(callback) {
  database.ref(`pending`).on('value', (snapshot) => {
    const newNoteState = snapshot.val();
    callback(newNoteState);
  });
}

export function fetchApproved(callback) {
  database.ref(`approved`).on('value', (snapshot) => {
    const newNoteState = snapshot.val();
    callback(newNoteState);
  });
}

export function addNote(newNote) {
  database.ref(`pending`).push(newNote).key.toString();
}

export function approveNote(noteID) {
  database.ref(`pending`).child(noteID).on('value', (snapshot) => {
    database.ref(`approved`).push(snapshot.val()).key.toString();
    database.ref('pending').child(noteID).remove();
  });
}
