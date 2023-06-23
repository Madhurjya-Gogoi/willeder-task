// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC5zvL4FSmpWPKZnlkx2FEc7xf0gGGNSbk',
  authDomain: 'willeder-project.firebaseapp.com',
  projectId: 'willeder-project',
  storageBucket: 'willeder-project.appspot.com',
  messagingSenderId: '1020246266361',
  appId: '1:1020246266361:web:db6faa111bee29f9962d28',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
