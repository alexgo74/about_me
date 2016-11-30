'use strict';

// The questions in the guessing game must require a mix of yes/no answers, and user input must accept either y/n or yes/no questions, with either .toUpperCase() or .toLowerCase() used to validate the user input and accommodate users entering all-caps Y/N or YES/NO answers, too.

var response1 = prompt('Do you want to play "Know About Alejandro"?').toLowerCase();

if (response1 === 'yes' || response1 === 'y' || response1 === 'yeah') {
  alert('Cool, that\'s the attitude!');
  console.log('Response is: ' + response1);
} else if (response1 === 'no' || response1 === 'n') {
  alert('Really?, you\'re missing on a lot of fun...');
} else {
  alert('Try to answer with a yes/y or no/n next time.');
}
console.log('Response 1 is: ' + response1);

var response2 = prompt('Is Alejandro attending Code Fellows?').toLowerCase();

if (response2 === 'yes' || response2 === 'y' || response2 === 'yeah') {
  alert('Wow, you know things!');
} else if (response2 === 'no' || response2 === 'n') {
  alert('Umm?, haven\'t you heard?');
} else {
  alert('Try to answer with a yes/y or no/n next time.');
}
console.log('Response 2 is: ' + response2);

var response3 = prompt('Is Code 201 awesome?')
  .toLowerCase();

if (response3 === 'yes' || response3 === 'y' || response3 === 'yeah') {
  alert('You said it!');
} else if (response3 === 'no' || response3 === 'n') {
  alert('What?? You have to take the class, Sam\'s awesome!');
} else {
  alert('Try to answer with a yes/y or no/n next time.');
}
console.log('Response 3 is: ' + response3);

var response4 = prompt('Interested so far?').toLowerCase();

if (response4 === 'yes' || response4 === 'y' || response4 === 'yeah') {
  alert('Ok, we\'re almost done.');
} else if (response4 === 'no' || response4 === 'n') {
  alert('Let\'s try one more time!');
} else {
  alert('Try to answer with a yes/y or no/n next time.');
}
console.log('Response 4 is: ' + response4);

var response5 = prompt('Ready to know more about Alejandro?').toLowerCase();

if (response5 === 'yes' || response5 === 'y' || response5 === 'yeah') {
  alert('Great! Thank you for playing!');
} else if (response5 === 'no' || response5 === 'n') {
  alert('Man, that\'s rude!');
} else {
  alert('Try to answer with a yes/y or no/n next time.');
}
console.log('Response 5 is: ' + response5);
