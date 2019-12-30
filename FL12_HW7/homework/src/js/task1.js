let email = prompt('Enter an email', '');
let email_length = 5;
let newpas_lngth = 6;
let password = prompt('Enter a password', '');
let us_pas = 'UserPass';
let ad_pas = 'AdminPass'
if(email === null || email===''){
  alert('Canceled.');
} else if (email.length <= email_length){
  alert("I don't know any emails having name length less than5 symbols");
} else if (email === 'user@gmail.com' || email ==='admin@gmail.com'){
  password;
} else {
  alert("I don't know you");
}

if (password === null || password === '') {
  alert('Canceled.');
} else if(email==='user@gmail.com' && password===us_pas || email==='admin@gmail.com' && password===ad_pas) {
    let change_pass = confirm('Do you want to change your password?');
  if (change_pass === true) {
    let old_pass = prompt('Enter an old password', '');
    if (old_pass === null || old_pass === '') {
      alert('Canceled.');
    } else if (email === 'user@gmail.com' && old_pass === us_pas || email === 'admin@gmail.com' && old_pass === ad_pas){
      let new_pass = prompt('Enter a new password', '');
      if (new_pass === null || new_pass === '') {
        alert('Canceled.');
      }
    }
  } else {
    alert('You have failed the change.')
  }
} else {
  alert('Wrong password');
}