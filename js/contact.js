newPageTitle = 'Contact';
document.title = newPageTitle;

const form = document.querySelector("#contactForm");

const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");

const secondName = document.querySelector("#secondName");
const secondNameError = document.querySelector("#secondNameError");

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");

//name

function validateForm(event) {
  event.preventDefault();

  if (firstName.value.trim().length > 0) {
     firstNameError.style.display = "none";
  } 
  else {
     firstNameError.style.display = "block";
  }

  if (secondName.value.trim().length > 0) {
    secondNameError.style.display = "none";
 } 
 else {
    secondNameError.style.display = "block";
 }

//email

if (validateEmail(email.value) === true) {
  emailError.style.display = "none";
} else {
  emailError.style.display = "block";
}

  //message

  if (message.value.trim().length > 25) {
    messageError.style.display = "none";
  }
  else {
    messageError.style.display = "block";
  }

  //success message (alert)

  if(firstName.value.trim().length > 0 && secondName.value.trim().length > 0 && email.value.trim().length > 0 && message.value.trim().length > 0 === true){
    window.alert("success! Your message has been sendt. we will get back to you as soon as possible!");}
    
    firstName.value = "";
    secondName.value = "";
    email.value = "";
    message.value = "";
}



form.addEventListener("submit", validateForm);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

//email

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

