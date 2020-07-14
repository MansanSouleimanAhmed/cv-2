const gulp = require("gulp"),
    sass = require("gulp-sass"),
    //   sourcemaps = require("gulp-sourcemaps"),
    autoprefixer = require("autoprefixer"),
    rename = require("gulp-rename"),
    cssnano = require("cssnano"),
    postcss = require("gulp-postcss"),
    cleanCSS = require("gulp-clean-css"),
    //concat = require("gulp-concat"),
    //imagemin = require("gulp-imagemin"),
    changed = require("gulp-changed");
//uglify = require("gulp-uglify");
//lineec = require("gulp-line-ending-corrector");

const SCSS_SRC = "./src/*.scss",
    SCSS_DEST = "./src/css";
//IMG_SRC = "./src/assets/**/*.jpg";
//  IMG_DEST = "./src/assets/**/*.jpg";
function style() {
    let processors = [autoprefixer, cssnano];
    return gulp
        .src(SCSS_SRC)
        .pipe(sass().on("error", sass.logError))
        .pipe(postcss(processors)) /*add*/ // PostCSS plugins
        .pipe(cleanCSS())
        .pipe(rename({suffix: ".min"}))
        .pipe(changed(SCSS_SRC))
        .pipe(gulp.dest(SCSS_DEST));
}
/* function imageMimify() {

} */
function watch() {
    gulp.watch(SCSS_SRC, style);
}
gulp.task("default", watch);
gulp.task("style", style);
/* var files = gulp.parallel(style, jsTask);
//Building task
var build = gulp.series(files, gulp.parallel(serve, watch));
gulp.task(build);
gulp.task("default", build); */
