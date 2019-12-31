function getMin() {
  let min = arguments[0];
  for(let i=0; i<arguments.length; i++){
    if (arguments[i] < min) {
      min = arguments[i];
    }
  }
  return min;
}

getMin(5, -6, 2, -15);