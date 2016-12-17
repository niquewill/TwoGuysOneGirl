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
  var license;
  var availability;
  var gender ;
  var specialties = "";
  var star ;
  var picture = $('<img>');

  //====================================================================
  // 3. Capture Button Click login-button
  $("#add-nurse").on("click", function() {

    $('.main-login main-center input-radio').click(function () {
    $(this).parents('.radioCheck li input').children('li').removeClass("selected");
    $(this).parents('li').addClass('selected'); 
  });

  // 4. Code in the logic for storing and retrieving the most recent user.
  name = $("#name-input").val();
  email = $("#email-input").val();
  username = $("#username-input").val();
  password = $("#password-input").val();
  confirm = $("#confirm-input").val();
  specialties = $("#speciality-input").val();
  distance = $("#distance-input").val();
  pay = $("#pay-input").val();
  address = $("#autocomplete").val();
  profile = $("#comment-input").val();
  gender = $("#gender-input").val();
  license = $("#license-input").val();
  availability = $("#availability-input").val();
  picture = $("#picture-input").val();
  star = $("#stars-input").val();
 
  // 5. Code for the push
  database.ref().push({
    name: name,
    email: email,
    username: username,
    password: password,
    confirm: confirm,
    specialties: specialties,
    distance: distance,
    pay: pay,
    star:star,
    address: address,
    profile: profile,
    gender: gender,
    license: license,
    availability: availability,
    picture: picture,
    //rating: rating
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
console.log(childSnapshot.val().specialties);
console.log(childSnapshot.val().distance);
console.log(childSnapshot.val().pay);
console.log(childSnapshot.val().address);
console.log(childSnapshot.val().profile);
console.log(childSnapshot.val().gender);
console.log(childSnapshot.val().license);
console.log(childSnapshot.val().availability);
console.log(childSnapshot.val().picture);
console.log(childSnapshot.val().star);

// Store everything into a variable.
var name = childSnapshot.val().name;
var license = childSnapshot.val().license;
var rate = childSnapshot.val().rate;
var available = childSnapshot.val().password;
var specialties = childSnapshot.val().specialties;
var pay = childSnapshot.val().pay;
var picture = childSnapshot.val().picture;
var star = childSnapshot.val().star;

// full list of items to the well

$("#NurseTable > tbody").append("<tr></td>" + "<td>" + name + "</td>" + "<td>" + license + "</td>" + "<td>" + star + "</td>" + "<td>" + availability + "</td>" + "<td>" + specialties + "</td>" + "<td>" + pay + "</td>" + '<td><img src="' + picture + '"></td>'  +  "</td></tr>");

// Handle the errors
}, function(errorObject) {
  console.log("Errors handled: " + errorObject.code);
});

  
