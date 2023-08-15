function displayMessage(message: string): void {
    const outputElement = document.getElementById("result");
    if (outputElement) {
        outputElement.textContent = message;
    }
}

displayMessage("Hello from TypeScript!");