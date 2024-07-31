// Reglas de encriptación
const encryptionRules = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
};

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
    const output = encrypt(input);
    document.getElementById("outputText").value = output;
}

// Función para manejar el desencriptado desde la interfaz
function decryptText() {
    const input = document.getElementById("inputText").value;
    const output = decrypt(input);
    document.getElementById("outputText").value = output;
}

// Función para copiar el texto al portapapeles
function copyText() {
    const output = document.getElementById("outputText");
    output.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}
