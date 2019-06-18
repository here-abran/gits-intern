function maxCharacter(string) {
  let arr = [], max = 0;
  for (let i = 0; i < 26; i++){
    arr.push(0);
  }

  for (let i = 0; i < string.length; i++){
    arr[string[i].charCodeAt() - 97]++;
  }

  for (let i = 0; i < 26; i++){
    max = Math.max(max, arr[i]);
  }

  for (let i = 0; i < string.length; i++){
    if (arr[string[i].charCodeAt() - 97] == max) return string[i];
  }
}

console.log(maxCharacter("bcbcbc"));
