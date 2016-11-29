'use strict';

// The questions in the guessing game must require a mix of yes/no answers, and user input must accept either y/n or yes/no questions, with either .toUpperCase() or .toLowerCase() used to validate the user input and accommodate users entering all-caps Y/N or YES/NO answers, too.

var response1 = prompt('Does Alex have any cats?').toLowerCase();

// if (conditon is true) {
//   do something;
//   maybe do something more;
//   etc until done;
// } else {
//   do this thing;
//   and maybe yet another thing;
// }

if (response1 === 'yes' || response1 === 'y' || response1 === 'yeah') {
  alert('Yes, Alex does have three cats');
} else if (response1 === 'no' || response1 === 'n') {
  alert('Sorry, you\'re wrong, Alex has three cats');
} else {
  alert('Try to answer with a yes/y or no/n next time.');
}
