const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const resetBtn = document.getElementById("resetBtn");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});

resetBtn.addEventListener("click", () => {
  // Clear input values
  username.value = "";
  password.value = "";

  // Remove error and success classes
  const inputControls = document.querySelectorAll(".input-control");
  inputControls.forEach((control) => {
    control.classList.remove("error", "success");
    control.querySelector(".error").innerText = "";
  });
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();

  if (usernameValue === "") {
    setError(username, "Username is required");
  } else {
    setSuccess(username);
  }

  if (passwordValue === "") {
    setError(password, "Password is required");
  } else if (passwordValue.length < 8) {
    setError(password, "Password must be at least 8 characters.");
  } else {
    setSuccess(password);
  }
};
