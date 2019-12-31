function makeNumber(str) {
  let new_str = '';
  for(let i=0; i<str.length; i++){
    if (!isNaN(str[i])){
      new_str+=str[i]
    }
  }
  return new_str
}

makeNumber('ijifjgdj');