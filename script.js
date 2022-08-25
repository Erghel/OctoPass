const PSWRD_LENGTH = 25;
const CHARS =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*-()"
        .replace("\n", " ")
        .replace(" ", "");

const passwordInput = document.getElementById("password");

// Функция для генерирования пароля
function generatePassword() {
    let password = "";
    for (let _ = 0; _ < PSWRD_LENGTH; _++) {
        password += CHARS.charAt(Math.floor(Math.random() * CHARS.length));
    }
    // Выводим текст в наш input
    passwordInput.value = password;
}

// Функция для копирования пароля из input
function copyTextToClipboard(text) {
    const tempInput = document.createElement("input");
    tempInput.setAttribute("value", text);
    document.body.appendChild(tempInput);
    tempInput.select();

    try {
        const successful = document.execCommand("copy");
        const msg = successful ? "successful" : "unsuccessful";
        console.log("Fallback: Copying text command was " + msg);
    } catch (err) {
        console.error("Fallback: Oops, unable to copy", err);
    }

    document.body.removeChild(tempInput);
}

function copyText() {
    const text = document.getElementById("password").value;
    if (!navigator.clipboard) {
        copyTextToClipboard(text);
        return;
    }
    navigator.clipboard.writeText(text).then(
        function () {
            info.style.opacity = "1";
            setTimeout(function () {
                info.style.opacity = "0";
            }, 1000);
            console.log("Async: Copying to clipboard was successful!");
        },
        function (err) {
            console.error("Async: Could not copy text: ", err);
        }
    );
}

document.querySelector("#genPass").addEventListener("click", generatePassword);
document.querySelector("#copy").addEventListener("click", copyText);
