import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import { getDatabase, ref, push, set, child, get, remove } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-database.js";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-storage.js";

var firebaseConfig = {
      apiKey: "AIzaSyDLrlWB2tvKfIDPMeQanryBbttxx6tJJ_I",
      authDomain: "bibo-d195d.firebaseapp.com",
      databaseURL: "https://bibo-d195d-default-rtdb.firebaseio.com",
      projectId: "bibo-d195d",
      storageBucket: "bibo-d195d.appspot.com",
      messagingSenderId: "18980246378",
      appId: "1:18980246378:web:bdfa3d894690851b4a0b13",
      measurementId: "G-0NHWZMJGCR"
};

//initialize firebase
     firebase.initializeApp(firebaseConfig);
    var firebaseRef = firebase.database().ref("products");
    firebaseRef.once("value", function(snapshot){
    var data = snapshot.val();
    for(let i in data){
    console.log(data[i]);
    } 
  });