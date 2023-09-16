function validateFn(){
  let firstName = document.getElementById("f_name");
  let lastName = document.getElementById("l_name");
  let userName = document.getElementById("u_name");
  let psswrd = document.getElementById("pswd");

  localStorage.setItem("fn",firstName.value);
  localStorage.setItem("ln",lastName.value);
  localStorage.setItem("un",userName.value);
  localStorage.setItem("pd",psswrd.value);

  var fn_err = document.getElementById("spn1");
  var ln_err = document.getElementById("spn2");
  var un_err = document.getElementById("spn3");d
  var pw_err = document.getElementById("spn4");
  

  if(firstName.value ==""){
      fn_err.innerHTML="Please Enter your First name";
      return false;
  }else{
      fn_err.style.display="none";
  }

  if(lastName.value ==""){
      ln_err.innerHTML="Please Enter your Last name";
      return false;
  }else{
      ln_err.style.display="none";
  }

  if(userName.value ==""){
      un_err.innerHTML="Please Enter User name";
      return false;
  }else{
      un_err.style.display="none";
  }

  if(psswrd.value ==""){
      pw_err.innerHTML="Please Enter your Password";
      return false;
  }else{
      pw_err.style.display="none";
  }
}