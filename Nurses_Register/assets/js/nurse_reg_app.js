// 1. Initialize Firebase

//======================================================================
var config = {
    apiKey: "AIzaSyAdJLKkQqh4aEDQWdX4d8tsn3z-Fy5Bb2w",
    authDomain: "lifeline-project-5169a.firebaseapp.com",
    databaseURL: "https://lifeline-project-5169a.firebaseio.com",
    storageBucket: "lifeline-project-5169a.appspot.com",
    messagingSenderId: "218101968397"
  };
  firebase.initializeApp(config);

  //=====================================================================

  // 2. Define firebase database as a variable

  var database = firebase.database();

  // 3. Set Initial Values
  var name = "";
  var email = "";
  var username = "";
  var password = "";
  var confirm = "";
  var distance = 0;
  var pay = 0;
  var text = "";
  var comment = "";

  //====================================================================

  $('input[type="radio"]').bind('click',function() {
    $('input[type="radio"]').not(this).prop("checked", false);
  });

  // 3. Capture Button Click login-button
  $("#add-nurse").on("click", function() {
  
  // 4. Code in the logic for storing and retrieving the most recent user.
  name = $("#name-input").val().trim();
  email = $("#email-input").val().trim();
  username = $("#username-input").val().trim();
  password = $("#password-input").val().trim();
  confirm = $("#confirm-input").val().trim();
  distance = $("#distance-input").val().trim();
  pay = $("#pay-input").val().trim();
  address = $("#autocomplete").val().trim();
  comment = $("#comment-input").val().trim();

  // 5. Code for the push
  database.ref().push({
    name: name,
    email: email,
    username: username,
    password: password,
    confirm: confirm,
    distance: distance,
    pay: pay,
    address: address,
    comment: comment
  });
  // 6. Don't refresh the page!
  return false;
});

// 7. Firebase watcher + initial loader HINT: This code behaves similarly to .on("child_added")
database.ref().on("child_added", function(childSnapshot) {

// 8. Log everything that's coming out of snapshot
console.log(childSnapshot.val().name);
console.log(childSnapshot.val().email);
console.log(childSnapshot.val().username);
console.log(childSnapshot.val().password);
console.log(childSnapshot.val().confirm);
onsole.log(childSnapshot.val().distance);
console.log(childSnapshot.val().pay);
console.log(childSnapshot.val().comment);

// Handle the errors
}, function(errorObject) {
  console.log("Errors handled: " + errorObject.code);
});

  
