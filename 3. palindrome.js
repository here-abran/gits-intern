// Procedural
// ----------
// function palindrome(string) {
//   return string.split("").reverse().join('') === string;
// }

function palindrome(string) {
  let palindrome = true;
  for (let i = 0, j = string.length - 1; i < string.length / 2; i++, j--) {
    if (string[i] != string[j]) palindrome = false;
  }
  return palindrome;
}

console.log(palindrome("kodok"));
