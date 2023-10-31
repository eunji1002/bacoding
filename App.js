import firebase from 'firebase/app';
import 'firebase/auth';        //없으면 안됌
import 'firebase/firestore';  //없으면 안됌
import firebaseConfig from './config/firebaseApi';

import Navigation from './Navigation';



export default function App() {
  return (
    <Navigation />
  );
}
