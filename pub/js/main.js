function displayMessage(message) {
    var outputElement = document.getElementById("result");
    if (outputElement) {
        outputElement.textContent = message;
    }
}
displayMessage("Hello from TypeScript!");

//# sourceMappingURL=main.js.map
<h2>Kattnamn:</h2>",cats.forEach((function(e){resultDiv.innerHTML+="<p>".concat(e.name,"</p>")}));var catBreeds=cats.map((function(e){return e.breed}));resultDiv.innerHTML+="<h2>Kattraser:</h2>",catBreeds.forEach((function(e){resultDiv.innerHTML+="<p>".concat(e,"</p>")}));var siameseCats=cats.filter((function(e){return"Siames"===e.breed}));resultDiv.innerHTML+="<h2>Siamesiska Katter:</h2>",siameseCats.forEach((function(e){resultDiv.innerHTML+="<p>".concat(e.name,"</p>")}));
//# sourceMappingURL=main.js.map
