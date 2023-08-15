# DT173G 

## Momentet ingår i kursen *”Webbutveckling III”*

I Webbutveckling III finns flera moment. Det första momentet handlar om **NodeJs & Gulp**.

Syftet med uppgiften är:

* Förstå hur man kan använda NodeJs på klient-sidan.

* Kunna använda något kommandobaserat verktyg i NodeJs för att göra arbetsuppgifter automatiskt och enklare när man bygger en webbplats.

* Skapa en struktur för gruden som sedan kan återanvändas till kommande webbplatser.


---
___


## Automatiseringsprocessen:

Automatiseringsprocessen syfte är att göra utvecklandet av en webbplats mer effektiv. Det görs genom att automatisera uppgifter som annars skulle tagit längre tid, innehålla mycket "onödiga" tecken såsom kommentarer och radbrytningar samt upprepningar. 

## Paket och verktyg som använts:

I arbetet har jag använt följande paket och verktyg:

* **Gulp:** Utgör Grundverktyget för arbetsprocessen.
* **Gulp-concat:** Används för att slå samman, konkatenera CSS- och JavaScript-filer. Jag valde denna för att den kunde hantera både CSS och JS och sätta ihop alla mina filer till en och samma fil.
* **Gulp-terser:** Valde jag för minimera och komprimera JavaScript-filer. För att ta bort onödiga blanksteg, kommentarer och radbrytningar till exempel.
* **Gulp-cssnano:** Gör samma som ovan fast med CSS-kod i stället.
* **Gulp-imagemin:** Använde jag för att kunna komprimera mina bildfiler så att de tar upp mindre utrymme på servern och på det viset laddas upp fortare i webbläsaren.
* **Browser-sync:** Gör det möjligt att se uppdateringar och ändringar i realtid. Man slipper uppdatera manuellt varenda gång man gör en ändring och kan i stället se det direkt på skärmen. Det sparar tid och gör det lättare att testa.

## Beskrivning av systemet:

Det automatiserade systemet utför följande uppgifter:

Jag startade projektet genom att sätta igång med "npm init -y", vilket skapade en fil som heter "package.json". Sedan skapade jag en fil vid namn "gulpfile.js", filen där alla tasks skulle ingå. Jag installerade sedan Gulp genom att skriva "npm install gulp --save-dev".

För att komma igång började jag med att skriva kod som flyttar HTML-filerna från källkoden till mappen där de ska publiceras. Sedan hämtade jag ett paket, gulp-concat för att konkatenera CSS-filer och samma paket kunde göra detsamma med JavaScript-filer. Jag använde därefter "gulp-terser" för att göra mina JS-filer mindre och "gulp-cssnano" för att göra samma med mina CSS-filer.

För att komprimera bilderna laddade jag ner ett paket som heter "gulp-imagemin". 
Alla ändringar också gick från källkodsfilerna till de filer som faktiskt används när webbplatsen visas, publiceringsfilerna.

För att göra utvecklandet mer smidigt, lade jag till en "watch-task" som kontinuerligt kontrollerar om några filer ändras. Om de gör det flyttas dem till den publiceringsmappen som jag valt. Slutligen la jag till "browsersync" för att få ändringar att visas direkt i webbläsaren utan att jag behövde ladda om sidan.

I varje uppgift kontrollerar jag först om det finns källkodsfiler av den typen. Dessa filer förs sedan vidare i ett flöde (stream), där det ibland finns olika steg likt olika rör(pipes). Ett steg kan exempelvis ta bort onödiga mellanslag och kommentarer, medan ett annat steg kanske slår samman filer. Gemensamt för alla tasks är att de slutligen når sin slutdestination som bearbetade filer. Detta är då mappen som jag valt att publiceringsfilerna ska hamna i.

---