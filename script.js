// Функция для генерирования пароля
function generatePassword() {
    let length = 25;
    let chars = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*-()`;
    chars = chars.replace('\n', " ").replace(" ", '');
    let password = "";
    let n = chars.length;
    for (var i = 0; i < length; ++i) {
        password += chars.charAt(Math.floor(Math.random() * n));
    } // Выводим текст в наш input
    const passwordInput = document.getElementById('password');
    passwordInput.value = password;
}

function fallbackCopyTextToClipboard(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
   let successful = document.execCommand('copy');
   let msg = successful ? 'successful' : 'unsuccessful';
    console.log('Fallback: Copying text command was ' + msg);
  } catch (err) {
    console.error('Fallback: Oops, unable to copy', err);
  }

  document.body.removeChild(textArea);
}
function copytext() {
  const text = document.getElementById('password').value
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }
  navigator.clipboard.writeText(text).then(function() {
    info.style.opacity = "1";
    setTimeout(function() {
      info.style.opacity = "0"
    }, 1000);
    console.log('Async: Copying to clipboard was successful!');
  }, function(err) {
    console.error('Async: Could not copy text: ', err);
  });
}

document.getElementById('copy').addEventListener('click', function(event) {
  copytext();
});
