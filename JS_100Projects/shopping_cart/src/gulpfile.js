const gulp          = require("gulp");
const sass          = require("gulp-sass");
const mincss        = require("gulp-clean-css");
const prefixcss     = require("gulp-autoprefixer");
const cleancss      = require("gulp-purgecss");
const pug           = require("gulp-pug");
const pugBeautify   = require("gulp-pug-beautify");
const htmlBeautify  = require("gulp-html-beautify");
const uglyjs        = require("gulp-uglify");
//const hintjs      = require("gulp-jshint");
const minimgs       = require("gulp-imagemin");
const concat        = require("gulp-concat");
//const sync        = require("browser-sync").create();
const rename        = require("gulp-rename");
const connect       = require("gulp-connect");
const browserify    = require("browserify");
const babelify      = require("babelify");
const source        = require("vinyl-source-stream");
const buffer        = require("vinyl-buffer");

var srcSRC = "src/*/*",
    srcDEST = "../../../dist/projects/JS_100Projects/shopping_cart/src/src/",
    gulpFileSRC = "gulpfile.js",
    gulpFileDEST = "../../../dist/projects/JS_100Projects/shopping_cart/src/",
    packageSRC = "package.json",
    packageDEST = "../../../dist/projects/JS_100Projects/shopping_cart/src/",
    packageLockSRC = "package-lock.json",
    packageLockDEST = "../../../dist/projects/JS_100Projects/shopping_cart/src/";

var htmlSRC = "src/index.pug",
    htmlDEST = "../../../dist/projects/JS_100Projects/shopping_cart/",
    sassSRC = "src/sass/*.sass",
    cssDEST = "../../../dist/projects/JS_100Projects/shopping_cart/css/",
    jsSRC = "src/js/script.js",
    jsDEST = "../../../dist/projects/JS_100Projects/shopping_cart/js/",
    imgsSRC = "src/imgs/*",
    imgsDEST = "../../../dist/projects/JS_100Projects/shopping_cart/imgs/";

gulp.task("connect", function(done){
  connect.server({
    //open: {browser : "google chrome"},
    base: 'http://localhost',
    port: 9000,
    root: htmlDEST,
    livereload: true,
  });
  done()
});


gulp.task("css", function(){
  return gulp.src(sassSRC)
      .pipe(sass().on("error", sass.logError))
      .pipe(prefixcss())
      .pipe(gulp.dest(cssDEST))
      .pipe(connect.reload())
});

gulp.task("html",function(){
  return gulp.src(htmlSRC)
      .pipe(pug())
      //.pipe(pugBeautify({ omit_empty_lines: true }))
      .pipe(htmlBeautify())
      //.pipe(rename("index.php"))
      .pipe(gulp.dest(htmlDEST))
      .pipe(connect.reload())
});

gulp.task("js", function(done){
  browserify(jsSRC)
    .transform(babelify)
    .bundle()
    .pipe(source("script.js"))
    .pipe(buffer())
    .pipe(gulp.dest(jsDEST))
    .pipe(connect.reload());
  done();
});

gulp.task("cpimgs",function(){
  return gulp.src(imgsSRC)
    .pipe(gulp.dest(imgsDEST))
    .pipe(connect.reload())
});


gulp.task("cleancss", function(){
  return gulp.src(cssDEST+"style.css")
      //.pipe(cleancss({content: ["../../dist/portfolio/solidtyper.github.io/index.php"]}))
      .pipe(mincss())
      .pipe(gulp.dest(cssDEST))
})

gulp.task("cleanjs", function(){
  return gulp.src(jsDEST+"script.js")
      //.pipe(hintjs.reporter("default"))
      .pipe(uglyjs())
      .pipe(gulp.dest(jsDEST))
})

gulp.task("cleanimgs", function(){
  return gulp.src(imgsDEST+"*")
      .pipe(minimgs())
      .pipe(gulp.dest(imgsDEST))
})

gulp.task("cleanSrcFiles", function(){
    gulp.src([srcSRC])
        .pipe(gulp.dest([srcDEST]));

    gulp.src([gulpFileSRC])
        .pipe(gulp.dest([gulpFileDEST]));

    gulp.src([packageSRC])
        .pipe(gulp.dest([packageDEST]));

    gulp.src([packageLockSRC])
        .pipe(gulp.dest([packageLockDEST]));

})

gulp.task("watchPug", function(done){gulp.watch('src/index.pug', gulp.series('html'));done()});
gulp.task("watchSass", function(done){gulp.watch('src/sass/*.sass', gulp.series('css'));done()});
gulp.task("watchJs", function(done){gulp.watch('src/js/*', gulp.series('js'));done()});
gulp.task("watchImgs", function(done){gulp.watch('src/imgs/*', gulp.series('cpimgs'));done()});
gulp.task("watch", gulp.parallel('watchPug', 'watchSass', 'watchJs', 'watchImgs'));


gulp.task("clean", gulp.parallel("cleancss", "cleanjs", "cleanimgs", "cleanSrcFiles"));

gulp.task("cleanstart", gulp.parallel("clean", "watch"));

gulp.task("default", gulp.parallel("css", "js", "cpimgs", "watch", "connect"));
