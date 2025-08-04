import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth,initializeAuth,getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyAe1FfykPGwN8pcVN5vZMn4RkzS0BVTJm0",
  authDomain: "workoutapp-cde1e.firebaseapp.com",
  projectId: "workoutapp-cde1e",
  storageBucket: "workoutapp-cde1e.firebasestorage.app",
  messagingSenderId: "137503978383",
  appId: "1:137503978383:web:b56b164712d45211cf11fa",
  measurementId: "G-RKTZ7FXEZ8"
};

  const app = initializeApp(firebaseConfig);
  initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });
  const auth = getAuth(app);
  const db = getFirestore(app); 
  
  export { auth, db };