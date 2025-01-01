// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { 
  REACT_APP_API_KEY, 
  REACT_APP_AUTH_DOMAIN, 
  REACT_APP_PROJECT_ID, 
  REACT_APP_STORAGE_BUCKET, 
  REACT_APP_MESSAGING_SENDER_ID, 
  REACT_APP_APP_ID, 
  REACT_APP_MEASUREMENT_ID 
} from '@env';

// Cấu hình Firebase sử dụng các biến môi trường
const firebaseConfig = {
  apiKey: REACT_APP_API_KEY,
  authDomain: REACT_APP_AUTH_DOMAIN,
  projectId: REACT_APP_PROJECT_ID,
  storageBucket: REACT_APP_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_MESSAGING_SENDER_ID,
  appId: REACT_APP_APP_ID,
  measurementId: REACT_APP_MEASUREMENT_ID
};
console.log('Firebase config 1:', firebaseConfig);

// Initialize Firebase
 const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
export default firebaseApp;