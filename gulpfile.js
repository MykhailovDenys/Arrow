'use strict';

var gulp = require('gulp'),
  watch = require('gulp-watch'),
  prefixer = require('gulp-autoprefixer'),
  //uglify = require('gulp-uglify'),
  sass = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps'),
  rigger = require('gulp-rigger'),
  //cssmin = require('gulp-minify-css'),
  rimraf = require('rimraf'),
  browserSync = require("browser-sync"),
  reload = browserSync.reload,
  tinypng = require('gulp-tinify'),
  del = require('del'),
  runSequence = require('run-sequence');
  


  var path = {
    build: { //Тут мы укажем куда складывать готовые после сборки файлы
      html: 'build/',
      js: 'build/js/',
      css: 'build/css/',
      img: 'build/img/',
      fonts: 'build/fonts/'
    },
    src: { //Пути откуда брать исходники
      html: 'src/*.html', //Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
      js: 'src/js/script.js', //В стилях и скриптах нам понадобятся только main файлы
      style: 'src/scss/main.scss',
      img: 'src/img/**/*.*', //Синтаксис img/**/*.* означает - взять все файлы всех расширений из папки и из вложенных каталогов
      fonts: 'src/fonts/**/*.*'
    },
    watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
      html: 'src/**/*.html',
      js: 'src/js/**/*.js',
      style: 'src/scss/**/*.scss',
      //img: 'src/img/**/*.*',
      fonts: 'src/fonts/**/*.*'
    },
    clean: './build'
  };
  
  
  var config = {
    server: {
      baseDir: "./build"
    },
    tunnel: true,
    host: 'localhost',
    port: 9000,
    logPrefix: "Denys Mykhailov"
  };
  
  
  gulp.task('html:build', function () {
    gulp.src(path.src.html) //Выберем файлы по нужному пути
      .pipe(rigger()) //Прогоним через rigger
      .pipe(gulp.dest(path.build.html)) //Выплюнем их в папку build
      .pipe(reload({
        stream: true
      })); //И перезагрузим наш сервер для обновлений
  });
  
  gulp.task('js:build', function () {
    gulp.src(path.src.js) //Найдем наш main файл
      .pipe(rigger()) //Прогоним через rigger
      .pipe(sourcemaps.init()) //Инициализируем sourcemap
      //.pipe(uglify()) //Сожмем наш js
      .pipe(sourcemaps.write()) //Пропишем карты
      .pipe(gulp.dest(path.build.js)) //Выплюнем готовый файл в build
      .pipe(reload({
        stream: true
      })); //И перезагрузим сервер
  });
  
  gulp.task('style:build', function () {
    gulp.src(path.src.style) //Выберем наш main.scss
      .pipe(sourcemaps.init()) //То же самое что и с js
      .pipe(sass()) //Скомпилируем
      .pipe(prefixer()) //Добавим вендорные префиксы
      //.pipe(cssmin()) //Сожмем
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(path.build.css)) //И в build
      .pipe(reload({
        stream: true
      }));
  });
  
  
  gulp.task('tinypng', function () {
    return gulp.src(path.src.img)
      .pipe(tinypng('9p56tpFg7ivyw5UeO23sHO9HpRycuN3C'))
      .pipe(gulp.dest(path.build.img));
  });
  
  gulp.task('del', function () {
    return del(path.src.img, {
        force: true
      })
      .then(paths => {
        console.log('Deleted: ', paths.join('\n'));
      });
  });
  
  gulp.task('minify', function () {
    runSequence('tinypng', 'del');
  });
  
  
  
  gulp.task('fonts:build', function () {
    gulp.src(path.src.fonts)
      .pipe(gulp.dest(path.build.fonts))
  });
  
  
  gulp.task('build', [
    'html:build',
    'js:build',
    'style:build',
    'fonts:build',
    //'image:minify'
  ]);
  
  
  gulp.task('watch', function () {
    watch([path.watch.html], function (event, cb) {
      gulp.start('html:build');
    });
    watch([path.watch.style], function (event, cb) {
      gulp.start('style:build');
    });
    watch([path.watch.js], function (event, cb) {
      gulp.start('js:build');
    });
    
  /////////////////////////////////////////////////
    /* watch([path.watch.img], function (event, cb) {
      gulp.start('image:minify');
    }); */
  /////////////////////////////////////////////////
  
    watch([path.watch.fonts], function (event, cb) {
      gulp.start('fonts:build');
    });
  });
  
  
  gulp.task('webserver', function () {
    browserSync(config);
  });
  
  gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
  });
  
  
  gulp.task('default', ['build', 'webserver', 'watch']);
  