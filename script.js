function generatePassword() {
  let length = 23;
  let chars = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*-()`;
  chars = chars.replace('\n', " ").replace(" ", '');
  let password = "";
  let n = chars.length;
  for (var i = 0; i < length; ++i) {
      password += chars.charAt(Math.floor(Math.random() * n));
  }
  const passwordInput = document.getElementById('password');
  passwordInput.value = password;
}
/**function copytext() {
  navigator.clipboard.writeText(password);
  info.style.opacity = "1";
  setTimeout(function() {
    info.style.opacity = "0"
  }, 1000);
}8/
