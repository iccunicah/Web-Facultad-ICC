import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {

    apiKey: "AIzaSyAPdzKhkRQAiJRHLOBXzNmSYgza_u7y3z4",
    authDomain: "web-facultad-icc.firebaseapp.com",
    projectId: "web-facultad-icc",
    storageBucket: "web-facultad-icc.appspot.com",
    messagingSenderId: "685098838490",
    appId: "1:685098838490:web:44bc25cead0962d0c078e3",
    measurementId: "G-FKP7TVK3M8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;