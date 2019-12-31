function countNumbers(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) {
      obj = str[i]
    }
  }
  return obj
}

console.log(countNumbers('erer384jj4444666888jfd123'));