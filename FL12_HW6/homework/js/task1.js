let a = prompt('Enter number a', '');
a = parseInt(a, 10);
if(a === null || isNaN(a)){
  console.log('Invalid input data');
}

let b = prompt('Enter number b', '');
b = parseInt(b, 10);
if (b === null || isNaN(b)) {
  console.log('Invalid input data');
}

let c = prompt('Enter number c', '');
c = parseInt(c, 10);
if (c === null || isNaN(c)) {
  console.log('Invalid input data');
}
let discrnum = 4;
let discriminant = b*b - discrnum*a*c;
if(discriminant===0){
  console.log('-1');
} else if (discriminant < 0){
  console.log('no solution');
} else {
  console.log(discriminant);
}