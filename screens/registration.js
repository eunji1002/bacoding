import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export async function registration(nickName, email, password) {
    
    try {
        console.log(nickName, email, password)
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        const currentUser = firebase.auth().currentUser;
        const db = firebase.firestore();
        db.collection("users")
        .doc(currentUser.uid)
        .set({
            email : currentUser.email,
            nickName : nickName
        });
        
    }catch (err) {
        console.log(err.message);
    }
}