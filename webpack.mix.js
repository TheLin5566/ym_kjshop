const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.disableNotifications()

mix.js('resources/js/app.js', 'public/js')

mix.postCss('resources/css/tailwind.css', 'public/css', [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-nested'),
    require('autoprefixer'),
    require('postcss-preset-env')({stage: 0})
])

if (mix.inProduction()) {
   mix.version()
}

mix.browserSync({
    proxy: 'laravelshopper.dev.test',
    injectChanges: true,
    notify: false,
    ui: false,
    files: [
        './content/**/*.md',
        './resources/views/**/*.html',
        './public/css/**/*.css',
        './public/js/**/*.js'
    ]
})
