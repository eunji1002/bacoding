import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export async function signin(email, password) {
  
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password)
   
  }catch (err) {
    console.log(err.message);
  }
}


