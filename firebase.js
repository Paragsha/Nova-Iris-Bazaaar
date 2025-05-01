// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCly_nrNKyo-JhcC_xl4fpxGX9s12O8GFI",
  authDomain: "novairisbazaar.firebaseapp.com",
  projectId: "novairisbazaar",
  storageBucket: "novairisbazaar.appspot.com",
  messagingSenderId: "460256816663",
  appId: "1:460256816663:web:bedaff3a8a64c07b75b652"
};

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
var storage = firebase.storage();
