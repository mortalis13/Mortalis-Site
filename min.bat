@echo off
:: npm i uglifycss -g
:: npm i uglify-js -g

echo.
echo -- Minify 'main.css'
cmd /c "uglifycss css/main.css --output css/main.min.css"
echo -- Minify 'media.css'
cmd /c "uglifycss css/media.css --output css/media.min.css"

echo -- Minify 'main.js'
cmd /c "uglifyjs js/main.js --output js/main.min.js"
