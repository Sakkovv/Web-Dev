if (year == 2015) {
    alert( "That's correct!" );
    alert( "You're so smart!" );
}
let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

alert( message );