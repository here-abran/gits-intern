function uniqueCharacter(string) {
  let arr = [], max = 0;
  for (let i = 0; i < 26; i++){
    arr.push(0);
  }

  for (let i = 0; i < string.length; i++){
    arr[string[i].charCodeAt() - 97]++;
  }
  console.log(arr);

  for (let i = 0; i < string.length; i++){
    if (arr[string[i].charCodeAt() - 97] === 1) return i;
  }
}

console.log(uniqueCharacter("loveleetcode"));
