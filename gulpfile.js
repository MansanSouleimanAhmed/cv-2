const gulp = require("gulp"),
    sass = require("gulp-sass"),
    //   sourcemaps = require("gulp-sourcemaps"),
    autoprefixer = require("autoprefixer"),
    rename = require("gulp-rename"),
    cssnano = require("cssnano"),
    postcss = require("gulp-postcss"),
    cleanCSS = require("gulp-clean-css"),
    //concat = require("gulp-concat"),
    imagemin = require("gulp-imagemin"),
    changed = require("gulp-changed");
//uglify = require("gulp-uglify");
//lineec = require("gulp-line-ending-corrector");

const SCSS_SRC = "./src/*.scss",
    SCSS_DEST = "./src/css",
    IMG_SRC = "./src/images/*",
    MIM_IMG_DESR = "./src/mimified-img";
//IMG_SRC = "./src/assets/**/*.jpg";
//  IMG_DEST = "./src/assets/**/*.jpg";
function style() {
    const processors = [autoprefixer, cssnano];
    return gulp
        .src(SCSS_SRC)
        .pipe(sass().on("error", sass.logError))
        .pipe(postcss(processors)) /*add*/ // PostCSS plugins
        .pipe(cleanCSS())
        .pipe(rename({suffix: ".min"}))
        .pipe(changed(SCSS_SRC))
        .pipe(gulp.dest(SCSS_DEST));
}
function imageMimify() {
    return gulp
        .src(IMG_SRC)
        .pipe(imagemin())
        .pipe(gulp.dest(MIM_IMG_DESR));
}
function watch() {
    gulp.watch(SCSS_SRC, style);
    gulp.watch(IMG_SRC, imageMimify);
}
//var files = gulp.parallel(style, imageMimify);

var build = gulp.series(gulp.parallel(imageMimify, watch));
gulp.task(build);
gulp.task("default", build);
/* gulp.task("watch", watch);
gulp.task("min", imageMimify); */
