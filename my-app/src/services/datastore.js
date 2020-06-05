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

const provider = new firebase.auth.GoogleAuthProvider();

export function fetchNotes(uid, callback) {
  database.ref(`notes/${uid}`).on('value', (snapshot) => {
    const newNoteState = snapshot.val();
    callback(newNoteState);
  });
}

export function auth(uidCallback, notesCallback) {
  firebase.auth().signInWithPopup(provider).then((result) => {
    const { uid } = result.user;
    const { displayName } = result.user;
    uidCallback(uid, displayName);
    fetchNotes(uid, notesCallback);
    console.log(`user ${displayName} logged in`);
  }).catch((error) => {
    console.log(`error in authentication: ${error}`);
  });
}

export function deAuth() {
  firebase.auth().signOut().then(() => {
  }).catch((error) => {
    console.log(`error in deauthentication: ${error}`);
  });
}

export function updateNote(id, noteUpdate) {
  database.ref(`commencement-2020/${id}`).update(noteUpdate).then(() => { console.log(`firebase updateNote of ID: ${id} successful`); })
    .catch(() => { console.log(`firebase updateNote of ID:${id} failed`); });
}
export function addNote(uid, newNote) {
  const id = database.ref(`notes/${uid}`).push(newNote).key.toString();
  updateNote(uid, id, { id });
}
export function deleteNote(uid, id) {
  database.ref(`notes/${uid}`).child(id).remove().then(() => { console.log(`firebase deleteNote of ID:${id} successful`); })
    .catch(() => { console.log(`firebase deleteNote of ID:${id} failed`); });
}