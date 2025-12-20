// firebase-config.js
// Project: nomoromosse
// Digunakan oleh semua fitur: fitur1.html, fitur2.html, ..., dasar.html

const firebaseConfig = {
  apiKey: "AIzaSyALc-1SYjzRUcB-Ws01rab1mxlmcv2e6dA",
  authDomain: "nomoromosse.firebaseapp
.com",
  databaseURL: "https://nomoromosse-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "nomoromosse",
  storageBucket: "nomoromosse.firebasestorage.app",
  messagingSenderId: "985183830784",
  appId: "1:985183830784:web:fae21bdb94c1f0103769e5"
};

// Inisialisasi Firebase hanya sekali
if (typeof firebase !== 'undefined' && !firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Ekspos database untuk penggunaan di fitur lain
const database = firebase.database();