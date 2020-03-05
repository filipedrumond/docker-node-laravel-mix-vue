const mix = require('laravel-mix');

mix.js('src/main.js', 'html/build/js')
    .sass('src/main.scss', 'html/build/css');