const form = document.querySelector(".main__form");
const inputEmail = document.querySelector(".main__form__emailInput");
const error = document.querySelector(".main__form__errorMsg");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const regExp =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

  if (regExp.test(inputEmail.value) == true) {
    inputEmail.style.outline = "1px solid hsl(0, 36%, 70%)";
    inputEmail.style.backgroundImage = "url(' ')";
    error.innerHTML = "";
  } else {
    inputEmail.style.outline = "1px solid red";
    inputEmail.style.backgroundImage = "url('./images/icon-error.svg')";
    error.innerHTML = "Please provide a valid email";
  }
});
