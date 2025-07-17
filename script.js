function checkPhone() {
  const phoneInput = document.getElementById("phoneNumber").value;
  const fullPhone = "+60" + phoneInput;

  if (!/^\d+$/.test(phoneInput)) {
    alert("Please enter numbers only.");
    return;
  }

  if (fullPhone !== "+60193502300") {
    alert("Phone number not found in loyalty system. Type '+60193502300' to continue.");
    return;
  }

  localStorage.setItem("phone", fullPhone);
  window.location.href = "register.html";
}

function register() {
  const name = document.getElementById("name").value.trim();
  const day = document.getElementById("day").value.trim();
  const month = document.getElementById("month").value.trim();
  const year = document.getElementById("year").value.trim();
  const email = document.getElementById("email").value.trim();
  const noEmail = document.getElementById("noEmail").checked;

  let valid = true;

  if (name === "") {
    document.getElementById("nameErr").textContent = "*Please insert a name.";
    valid = false;
  } else {
    document.getElementById("nameErr").textContent = "";
  }

  if (!day || !month || !year) {
    document.getElementById("birthdayErr").textContent = "*Please insert your birthday.";
    valid = false;
  } else {
    document.getElementById("birthdayErr").textContent = "";
  }

  if (!noEmail && !/^\S+@\S+\.\S+$/.test(email)) {
    document.getElementById("emailErr").textContent = "*Please insert a valid email address.";
    valid = false;
  } else {
    document.getElementById("emailErr").textContent = "";
  }

  if (!valid) return;

  const birthday = `${day.padStart(2, '0')}/${month.padStart(2, '0')}/${year}`;
  localStorage.setItem("name", name);
  localStorage.setItem("birthday", birthday);
  localStorage.setItem("email", noEmail ? "No Email" : email);

  window.location.href = "summary.html";
}
