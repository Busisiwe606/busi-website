// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "AIzaSyDlK2djZ80BiAPTAPeGyw_kO3T0dwh1c78",
    authDomain: "younglings-cf9e3.firebaseapp.com",
    databaseURL: "https://younglings-cf9e3.firebaseio.com",
    projectId: "younglings-cf9e3",
    storageBucket: "younglings-cf9e3.appspot.com",
    messagingSenderId: "330802647313",
    appId: "1:330802647313:web:c01a6a62a9b97b263c7cb0",
    measurementId: "G-8BV8Y70MN8"
  };
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, email, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, company, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email:email,
      message:message
    });
  }