// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDazADjKvMKd5e6xLB2pENpD3HWZ2sP1sE",
    authDomain: "ban-xe-vinfast.firebaseapp.com",
    projectId: "ban-xe-vinfast",
    storageBucket: "ban-xe-vinfast.appspot.com",
    messagingSenderId: "984825606971",
    appId: "1:984825606971:web:8e1d44a7af8271c9223d1e",
    measurementId: "G-HJDGJ6QTSY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
