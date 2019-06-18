function loop(string, count) {
  let temp = '';
  for (let i = 0; i < count; i++) {
    temp += string;
  }
  return temp;
}

function insertString(string) {
  let word = '';
  for (let i = 0; i < string.length; i++) {
    var regex = /\d/g;
    if (regex.test(string[i])) {
      word = loop(word, string[i]);
    } else word += string[i];
  }
  return word;
}

console.log(insertString("abc2d3"));

// rumus ((abc)*2 + d)*3
