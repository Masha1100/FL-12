let a = Number(prompt('Enter number a'));
if (a === null || a === '' || a === undefined || isNaN(a)) {
  alert('input values should be ONLY numbers');
}
let b = Number(prompt('Enter number b'));
if (b === null || b === '' || b === undefined || isNaN(b)) {
  alert('input values should be ONLY numbers');
}
let c = Number(prompt('Enter number c'));
if (c === null || c === '' || c === undefined || isNaN(c)){
  alert('input values should be ONLY numbers');
}

if(a===0 ||b===0 ||c===0){
    alert('A triangle must have 3 sides with a positive definite length ');
}

if (a < 0 || b < 0 || c < 0) {
  console.log('Triangle doesn’t exist ');
} else if(a===b && b===c && c===a){
  console.log('Equilateral triangle');
} else if (a === b !== c && b === c !==a && c === a !== b) {
  console.log('Isosceles triangle’');
} else {
  console.log('‘Scalene triangle');
}