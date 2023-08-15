// Lite data om katter i en array
const cats = [
    { name: "Misse", breed: "Maine Coon" },
    { name: "Morris", breed: "Siames" },
    { name: "Emil", breed: "Bondkatt" },
    { name: "Chicco", breed: "Bengal" },
    { name: "Texas", breed: "Ragdoll" }
  ];
  
// Hämta result-div från HTML-dokumentet genom att använda ID "result" i HTML-koden
const resultDiv = document.getElementById("result");

// Använd forEach för att iterera över arrayen "cats" och skriva ut katternas namn
resultDiv.innerHTML += "<h2>Kattnamn:</h2>"; // Lägger till en rubrik
cats.forEach(cat => { // Arrow function
  resultDiv.innerHTML += `<p>${cat.name}</p>`; // Lägger till varje katts namn som en <p> tag i "resultDiv" med hjälp av template literals
});

// Använd map för att skapa en ny array "catBreeds" med kattraserna från arrayen "cats"
const catBreeds = cats.map(cat => cat.breed); // Om kattens ras är exakt lika med "Siames" kommer den att inkluderas i den nya arrayen siameseCats
resultDiv.innerHTML += "<h2>Kattraser:</h2>"; // Lägger till en rubrik
catBreeds.forEach(breed => {
  resultDiv.innerHTML += `<p>${breed}</p>`; // Lägger till varje kattras som en <p> tag i "resultDiv"  med hjälp av template literals
});

// Använd filter för att skapa en ny array "siameseCats" med katter av rasen "Siames" från arrayen "cats"
const siameseCats = cats.filter(cat => cat.breed === "Siames");
resultDiv.innerHTML += "<h2>Siamesiska Katter:</h2>"; // Lägger till en rubrik
siameseCats.forEach(cat => {
  resultDiv.innerHTML += `<p>${cat.name}</p>`; // Lägger till namnet på varje siameskatt som en <p> tag i "resultDiv"  med hjälp av template literals
});

  