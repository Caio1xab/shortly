"use strict";
//getting elements
const form = document.querySelector("#link-form");
const input = document.querySelector("#link-input");
const errorMessage = document.querySelector("#err-msg");

//Mobile Hamburger
const menuBtn = document.querySelector("#menu-btn");
const menuMobile = document.querySelector("#menuMobile");

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("open");
  menuMobile.classList.toggle("hidden");
  menuMobile.classList.toggle("flex");
});

form.addEventListener("submit", formSubmition);

//Validate a URL
function validURL(str) {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return !!pattern.test(str);
}

function formSubmition(e) {
  e.preventDefault();

  if (input.value === "") {
    errorMessage.textContent = "Please enter something.";
    input.classList.add("border-yellow-400");
  } else if (!validURL(input.value)) {
    errorMessage.textContent = "Please enter a valid URL.";
  } else {
    input.classList.remove("border-yellow-400");
    alert("Success!!");
  }
}
