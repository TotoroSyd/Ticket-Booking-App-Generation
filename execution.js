const submit_button = document.getElementById("submit-button");
let one_way = document.getElementById("one-way");
let return_date = document.getElementById("return-date");
let return_date_section = document.getElementById("return-date-section");
let two_way = document.getElementById("return");
const from = document.getElementById("from");
const to = document.getElementById("to");
const p1_name = document.getElementById("p1-name");
const p2_name = document.getElementById("p2-name");
const p1_age = document.getElementById("p1-age");
const p2_age = document.getElementById("p2_age");
const p1_male = document.getElementById("p1_male");
const p2_male = document.getElementById("p2_male");
const p1_female = document.getElementById("p1_female");
const p2_female = document.getElementById("p2_female");
const departure_date = document.getElementById("departure-date");
const email = document.getElementById("email");
const mobile = document.getElementById("mobile");
const address = document.getElementById("address");
const invalid_name_1 = document.getElementById("invalid-name-1");
const invalid_name_2 = document.getElementById("invalid-name-2");

function hideReturnDate() {
  if (one_way.checked) {
    return_date_section.style.display = "none";
    two_way.checked = false;
  } else {
    return_date_section.style.display = "block";
  }
}

function revealReturnDate() {
  if (two_way.checked) {
    return_date_section.style.display = "block";
    one_way.checked = false;
  } else {
    return_date_section.style.display = "none";
  }
}

function checkPassengerDetails(name, message) {
  console.log(name);
  if (name.length < 5) {
    message.style.display = "block";
  } else {
    message.style.display = "none";
  }
}
function submit() {
  checkPassengerDetails(p1_name.value, invalid_name_1);
  checkPassengerDetails(p2_name.value, invalid_name_2);
}

submit_button.addEventListener("click", submit, false);
one_way.addEventListener("click", hideReturnDate, false);
two_way.addEventListener("click", revealReturnDate, false);
