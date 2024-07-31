function encryptText() {
    var input = document.getElementById("inputText").value;
    var output = encrypt(input);
    document.getElementById("outputText").value = output;
}

function decryptText() {
    var input = document.getElementById("inputText").value;
    var output = decrypt(input);
    document.getElementById("outputText").value = output;
}

function copyText() {
    var output = document.getElementById("outputText");
    output.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}

// Funciones de encriptación y desencriptación en JavaScript
