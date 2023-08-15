//Inkluderar gulp och andra paket
const {src, dest, parallel, series, watch} = require('gulp');
const concat = require('gulp-concat');
const terser = require("gulp-terser");
const sass = require('gulp-sass')(require('node-sass'));
const imagemin = require("gulp-imagemin");
const htmlmin = require('gulp-htmlmin');
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const babel = require("gulp-babel");
const ts = require('gulp-typescript');

//Lägg till sökvägar till filerna genom att skapa objekt och lägg sökväg där i
const files = {
    htmlPath: "src/**/*.html",
    sassPath: "src/sass/*.scss",
    jsPath: "src/js/*.js",
    imagePath: "src/images/*",
    tsPath: "src/ts/*.ts"
}

//HTML-task, kopiera html filer
function copyHTML() {
    return src(files.htmlPath)
    .pipe(htmlmin({ collapseWhitespace: true }))// Minifierar html-kod
    .pipe(dest('pub'));//kopieras till ny mapp
}

//Sass-task, mapar källkod, kompilerar sass till css, slår samman och minifierar
function sassTask(){
    return src(files.sassPath)
    .pipe(sourcemaps.init()) // // Starta maps för källkoden
    .pipe(sass({outputStyle:'compressed'}).on("error", sass.logError)) // Kompilera Sass till CSS, minifierar och ger felmeddelanden
    .pipe(concat('main.css')) // Konkatenera filer
    .pipe(sourcemaps.write('.maps')) // Källkoden mappas och skickas till en annan katalog
    .pipe(dest('pub/css')) // Skickar koden till ny mapp - pub/css
    .pipe(browserSync.stream()); // Laddar om webbläsare med css
}

//JS-task, konkatenera js-filer och minifierar dem
function jsTask() {
    return src(files.jsPath)
    .pipe(sourcemaps.init())
    .pipe(babel({
        presets: ['@babel/preset-env']
    }))//transpilera med Babel
    .pipe(concat("main.js"))//Slå ihop alla js-filer
    .pipe(terser())// minifierar koden
    .pipe(sourcemaps.write("."))// mappar js-koden
    .pipe(dest('pub/js'));// Skickar koden till pub/js-mappen
}
//Image-task, Lägger samman bilder och minifierar dem
function imageTask() {
    return src(files.imagePath)
    .pipe(imagemin())// Minifierar bilder
    .pipe(dest('pub/images')); // Lägger alla bilder i samma mapp
}

function tsTask() {
    return src(files.tsPath) 
        .pipe(sourcemaps.init())
        .pipe(ts({
            noImplicitAny: true,
            outFile: 'main.js'
        }))
        .pipe(sourcemaps.write("."))
        .pipe(dest('pub/js'));
}

// Watch-task, håller koll på om något förändras i koden och kör då funktion på nytt
function watchTask() {

    browserSync.init({//Uppdaterar så fort ändring görs i browser
        server: "./pub"
    });

    watch([files.htmlPath, files.sassPath, files.jsPath, files.imagePath, files.tsPath],parallel(copyHTML, sassTask, jsTask, imageTask, tsTask)).on('change', browserSync.reload);
}
//Exportera funktionen
exports.default = series(
    parallel(copyHTML, sassTask, jsTask, imageTask, tsTask),
    watchTask
);
