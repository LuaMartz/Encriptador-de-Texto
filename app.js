// Reglas de encriptación
const encryptionRules = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
};

// Función para validar el texto de entrada
function isValidText(text) {
    const regex = /^[a-z\s]*$/; // Solo letras minúsculas y espacios
    return regex.test(text);
}

// Función para mostrar un mensaje de error
function showError(message) {
    const errorMessage = document.getElementById("errorMessage");
    errorMessage.innerText = message;
    errorMessage.style.display = "block";
}

// Función para encriptar texto
function encrypt(text) {
    return text.split('').map(char => encryptionRules[char] || char).join('');
}

// Función para desencriptar texto
function decrypt(text) {
    let decryptedText = text;
    for (let key in encryptionRules) {
        decryptedText = decryptedText.split(encryptionRules[key]).join(key);
    }
    return decryptedText;
}

// Función para manejar el encriptado desde la interfaz
function encryptText() {
    const input = document.getElementById("inputText").value;
    if (!isValidText(input)) {
        showError("El texto contiene mayúsculas o caracteres especiales. Solo se permiten letras minúsculas sin acentos.");
        return;
    }
    const output = encrypt(input);
    displayResult(output);
}

// Función para manejar el desencriptado desde la interfaz
function decryptText() {
    const input = document.getElementById("inputText").value;
    if (!isValidText(input)) {
        showError("El texto contiene mayúsculas o caracteres especiales. Solo se permiten letras minúsculas sin acentos.");
        return;
    }
    const output = decrypt(input);
    displayResult(output);
}

// Función para mostrar el resultado en la segunda columna, ocultar la imagen y habilitar el botón de copiar
function displayResult(output) {
    const resultTitle = document.getElementById("resultTitle");
    const resultText = document.getElementById("resultText");
    const copyButton = document.getElementById("copyButton");
    const errorMessage = document.getElementById("errorMessage");
    const image = document.querySelector(".container img");

    errorMessage.style.display = "none"; // Ocultar mensaje de error si lo hubiera
    resultTitle.style.display = "none";
    resultText.textContent = output;

    // Ocultar la imagen y mostrar el botón de copiar
    image.style.display = "none";
    copyButton.style.display = "block";
}

// Función para copiar el texto al portapapeles utilizando la Clipboard API
function copyText() {
    const output = document.getElementById("resultText").textContent;

    // Usando la API del Portapapeles moderna
    navigator.clipboard.writeText(output).then(() => {
        alert("Texto copiado al portapapeles");
    }).catch(err => {
        console.error("Error al copiar el texto: ", err);
    });
}
