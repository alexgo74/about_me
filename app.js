'use strict';

// The questions in the guessing game must require a mix of yes/no answers, and user input must accept either y/n or yes/no questions, with either .toUpperCase() or .toLowerCase() used to validate the user input and accommodate users entering all-caps Y/N or YES/NO answers, too.

var response1 = prompt('Do you want to play "Know About Alejandro"?').toLowerCase();
console.log(response1);
if (response1 === 'yes' || response1 === 'y' || response1 === 'yeah') {
  alert('Cool, that\'s the attitude!');
} else if (response1 === 'no' || response1 === 'n') {
  alert('Really?, you\'re missing on a lot of fun...');
} else {
  alert('Try to answer with a yes/y or no/n next time.');
}

var response2 = prompt('Is Alejandro attending Code Fellows?').toLowerCase();
console.log(response2);
if (response2 === 'yes' || response2 === 'y' || response2 === 'yeah') {
  alert('Wow, you know things!');
} else if (response2 === 'no' || response2 === 'n') {
  alert('Umm?, haven\'t you heard?');
} else {
  alert('Try to answer with a yes/y or no/n next time.');
}

var response3 = prompt('Is Code 201 awesome?').toLowerCase();
console.log(response3);
if (response3 === 'yes' || response3 === 'y' || response3 === 'yeah') {
  alert('You said it!');
} else if (response3 === 'no' || response3 === 'n') {
  alert('What?? You have to take the class, Sam\'s awesome!');
} else {
  alert('Try to answer with a yes/y or no/n next time.');
}


var response4 = prompt('Interested so far?').toLowerCase();
console.log(response4);
if (response4 === 'yes' || response4 === 'y' || response4 === 'yeah') {
  alert('Cool, here we go!');
} else if (response4 === 'no' || response4 === 'n') {
  alert('Let\'s try one more time!');
} else {
  alert('Try to answer with a yes/y or no/n next time.');
}

var response5 = prompt('Ready to know more about Alejandro?').toLowerCase();
console.log(response5);
if (response5 === 'yes' || response5 === 'y' || response5 === 'yeah') {
  alert('Great! Thank you for playing!');
} else if (response5 === 'no' || response5 === 'n') {
  alert('Man, that\'s rude!');
} else {
  alert('Try to answer with a yes/y or no/n next time.');
}

// added question 6
for (var i = 0; i < 4; i++) {
  var favNumber = parseInt(prompt('What is my favorite number?'));
  console.log(favNumber);
  if (favNumber === 10) {
    alert('You guessed it, Congratulations!');
    break;

  } else if (favNumber > 10) {
    alert('Your number is greater than mine');

  } else if (favNumber < 10) {
    alert('Your number is less than mine');

  } else if (isNaN(favNumber)) {
    alert('Only numbers please');
  }
  if (i === 3) {
    alert('Sorry, you ran out of tries.');
  }
}

// added question 7
var cities = ['phoenix', 'san francisco', 'baltimore', 'seattle', 'tacoma', 'upland'];
var guesses = 0;
var choice = true;

while (guesses < 6 && choice) {
  var response7 = prompt('Can you guess a city I have lived in?').toLowerCase();
  console.log(response7);

  for (var j = 0; j < cities.length; j++) {
    if (response7 === cities[j]) {
      alert('You guessed it. Awesome! Thank you for playing!');
      choice = false;
      break;
    }
  }
  if (response7 !== cities[j]) {
    alert('You are wrong! Try again');
    guesses ++;
  }
}//end of while loop
if (guesses >= 6) {
  alert('You ran out of choices');
}
