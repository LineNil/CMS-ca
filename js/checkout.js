newPageTitle = 'Contact';
document.title = newPageTitle;

const form = document.querySelector("#contactForm");

const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");

const lastName = document.querySelector("#lastName");
const lastNameError = document.querySelector("#lastNameError");

const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");

const city = document.querySelector("#city");
const cityError = document.querySelector("#cityError");

const postalCode = document.querySelector("#postalCode");
const postalCodeError = document.querySelector("#postalCodeError");

const cvc = document.querySelector("#cvc");
const cvcError = document.querySelector("#cvcError");

const mmyy = document.querySelector("#mmyy");
const mmyyError = document.querySelector("#mmyyError");

const cardNr = document.querySelector("#cardNr");
const cardNrError = document.querySelector("#cardNrError");

//name

function validateForm(event) {
  event.preventDefault();

  if (firstName.value.trim().length > 0) {
     firstNameError.style.display = "none";
  } 
  else {
     firstNameError.style.display = "block";
  }

  if (lastName.value.trim().length > 0) {
    lastNameError.style.display = "none";
 } 
 else {
    lastNameError.style.display = "block";
 }

//address

if (address.value.trim().length > 2) {
  addressError.style.display = "none";
} 
else {
  addressError.style.display = "block";
}

//city

  if (city.value.trim().length > 2) {
    cityError.style.display = "none";
  }
  else {
    cityError.style.display = "block";
  }

//postal code

    if (postalCode.value.trim().length > 4) {
      postalCodeError.style.display = "none";
    }
    else {
      postalCodeError.style.display = "block";
    }

//cvc

  if (cvc.value.trim().length > 2) {
    cvcError.style.display = "none";
  }
  else {
    cvcError.style.display = "block";
  }

//mmyy

    if (mmyy.value.trim().length > 4) {
      mmyyError.style.display = "none";
    }
    else {
      mmyyError.style.display = "block";
    }

  //card nr

  if (cardNr.value.trim().length > 16) {
    cardNrError.style.display = "none";
  }
  else {
    cardNrError.style.display = "block";
  }

  //success message (alert)

  if(firstName.value.trim().length > 0 && lastName.value.trim().length > 0 && address.value.trim().length > 0 && city.value.trim().length > 0 && postalCode.value.trim().length > 0 && cvc.value.trim().length > 0 && mmyy.value.trim().length > 0 && cardNr.value.trim().length > 0){
    window.alert("success! Thank you for your purchase. Your order will be shipped within 24 hours. Expected delivery: 2-4 working days.");}
    
    firstName.value = "";
    lastName.value = "";
    address.value = "";
    city.value = "";
    postalCode.value = "";
    cvc.value = "";
    mmyy.value = "";
    cardNr.value = "";
    
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

