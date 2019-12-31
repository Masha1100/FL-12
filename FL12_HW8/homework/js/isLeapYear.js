function isLeapYear(year) {
  year = new Date(year);
  let new_year = year.getFullYear();
  if(isNaN(new_year)){
    return 'Invalid Date';
  } else if ((new_year % 4 === 0) && (new_year % 100 !== 0) || new_year % 400 === 0){
    return new_year +' is a leap year';
  }else {
    return new_year + ' is not a leap year';
  }
}

isLeapYear('2020-01-01 00:00:00');
