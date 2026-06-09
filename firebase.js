// Konfigurasi Firebase
const firebaseConfig = {
    apiKey: "AIzaSyC9IKr6LXdqxGwua1Te_9uxVim64nli3mY",
    authDomain: "kerjadekat-ea6c6.firebaseapp.com",
    projectId: "kerjadekat-ea6c6",
    storageBucket: "kerjadekat-ea6c6.firebasestorage.app",
    messagingSenderId: "404461697817",
    appId: "1:404461697817:web:ca72ca35a6c213e9a96388"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Export untuk digunakan di app.js
const auth = firebase.auth();
const db = firebase.firestore();

// Storage untuk MVP tidak digunakan (akan ditambah setelah upgrade)
// const storage = firebase.storage();
