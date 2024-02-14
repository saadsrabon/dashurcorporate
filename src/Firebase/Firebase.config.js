
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey:import.meta.API_KEY,
  authDomain:import.meta.AUTH_DOMAIN,
  projectId: import.meta.PROJECT_ID,
  storageBucket: import.meta.SBUCKET,
  messagingSenderId: import.meta.MSID,
  appId: import.meta.APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;