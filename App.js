import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import firebaseConfig from './config/firebaseApi';
import Navigation from './Navigation';



export default function App() {
  return (
    <Navigation />
  );
}
