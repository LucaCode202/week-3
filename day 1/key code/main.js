const key = document.getElementById("key");

const code = document.getElementById("code");

const charCode = document.getElementById("charCode");

document.addEventListener("keydown", (event) => {
  key.textContent = event.key;
  code.textContent = event.code;
  charCode.textContent = event.keyCode;
});
