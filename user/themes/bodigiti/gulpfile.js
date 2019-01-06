// Require Gulp
// http://stackoverflow.com/questions/32490328/gulp-autoprefixer-throwing-referenceerror-promise-is-not-defined
require('es6-promise').polyfill();
var gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
let cleanCSS = require('gulp-clean-css');
let uncss = require('gulp-uncss');
let uglifyJS = require('gulp-uglify'); // Minimizes JS
var watch = require('gulp-watch');
var del = require('del');
var spritesmith = require('gulp.spritesmith');

// Sass
gulp.task('sass', function() {
  gulp.src('style/scss/**/*.scss')
    .pipe(sourcemaps.init()) // Initialize sourcemaps
    .pipe(sass({
        errLogToConsole: true
        }))
    .on('error', swallowError)
    .pipe(prefix('last 2 versions', '>1%', 'ie 8'))
    .pipe(sourcemaps.write()) // Writes sourcemaps into the CSS file
    .pipe(gulp.dest('style/css'));
})

// Sass no-sourcemaps
gulp.task('sass-prod', function() {
  gulp.src('style/scss/**/*.scss')
    .pipe(sass({
        errLogToConsole: true
        }))
    .on('error', swallowError)
    .pipe(prefix('last 2 versions', '>1%', 'ie 8'))
    .pipe(gulp.dest('style/css'));
})

// UNCSS
// https://www.fourkitchens.com/blog/article/use-gulp-and-uncss-slim-down-your-css-framework/
gulp.task('uncss', function() {
  return gulp.src([
      'style/css/styles.css'
    ])
    .pipe(uncss({
      html: [
        'http://localhost:8000/'
      ]
    }))
    .pipe(gulp.dest('style/css'));
});

// Minify CSS
gulp.task('minify-css', () => {
  return gulp.src('style/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('style/css'));
});

// Minify JS
// Gulp task to minify JavaScript files
gulp.task('scripts', function() {
  return gulp.src('js/source/*.js')
    // Minify the file
    .pipe(uglifyJS())
    // Output
    .pipe(gulp.dest('js/dist'))
});


// Watch
gulp.task('watch', function() {
  gulp.watch('style/scss/**/*.scss', ['sass'])
  .on('error', swallowError)
})

// Clean
gulp.task('clean', function(cb) {
    del(['style/css/**/*.css'], cb)
});

// Default
gulp.task('default', ['sass', 'watch']);

// Sprite
gulp.task('sprite', function() {
  var spriteData =
    gulp.src('images/sprite-these/*.*') // source path of the sprite images
      .pipe(spritesmith({
          imgName: 'sprite-manufacturer-logos.png',
          cssName: '_sprite-manufacturer-logos.scss',
      }));

  spriteData.img.pipe(gulp.dest('images/')); // output path for the sprite
  spriteData.css.pipe(gulp.dest('style/scss/init/sprites/')); // output path for the SCSS
});

// Handle the error
function errorHandler (error) {
  console.log(error.toString());
  this.emit('end');
}

// Prevent errors from breaking / crashing gulp watch
// https://stackoverflow.com/questions/23971388/prevent-errors-from-breaking-crashing-gulp-watch
// Swallow Error
function swallowError (error) {
  // If you want details of the error in the console
  console.log(error.toString())

  this.emit('end')
}