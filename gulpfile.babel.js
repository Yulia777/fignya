'use strict';

import gulp from 'gulp';
import rename from 'gulp-rename';
import sass from 'gulp-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import imagemin from 'gulp-imagemin';
import uglify from 'gulp-uglify';
import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import csso from 'gulp-csso';
import imageminMozjpeg from 'imagemin-mozjpeg';

var paths = {
  style: 'src/scss/style.scss',
  watchSCSS: 'src/scss/**/*',
  mainScripts: 'src/js/main.js',
  watchScripts: 'src/js/**/*',
  optimizedImagesDist: './src/dist/upload/',
  optimizedTemplateImagesDist: './src/dist/images/',
  images: 'upload/**/*',
  templateImages: 'bitrix/templates/sales-generator/images/**/*'
};

gulp.task('optimize-images', () => {
  gulp.src(paths.images)
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.jpegtran({progressive: true, quality: 72}),
      imagemin.optipng({optimizationLevel: 7}),
      imagemin.svgo({
        plugins: [
          {removeViewBox: true},
          {cleanupIDs: false}
        ]
      })
    ], {
      use: [
        imageminMozjpeg([{quality: 50}])
      ],
      verbose: true
    }))
    .pipe(gulp.dest(paths.optimizedImagesDist))
});

gulp.task('optimize-template-images', () => {
  gulp.src(paths.templateImages)
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.jpegtran({progressive: true}),
      imagemin.optipng({optimizationLevel: 5}),
      imagemin.svgo({
        plugins: [
          {removeViewBox: true},
          {cleanupIDs: false}
        ]
      })
    ], {
      use: [
        imageminMozjpeg([{quality: 50}])
      ],
      verbose: true
    }))
    .pipe(gulp.dest(paths.optimizedTemplateImagesDist))
});

gulp.task('compress', () => {
  browserify(paths.mainScripts)
    .transform('babelify', {
      global: true,
      only: /^(?:.*\/node_modules\/(?:a|b|c|d)\/|(?!.*\/node_modules\/)).*$/,
      presets: ["es2015"]
    })
    .bundle()
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('./assets/js/'));
});


gulp.task('sass', function() {
  var plugins = [
    autoprefixer({browsers: ['last 4 version']})
  ];
  return gulp.src(paths.style)
    .pipe(sass())
    .pipe(postcss(plugins))
    .pipe(csso({
      restructure: true,
      sourceMap: false,
      debug: true
    }))
    .pipe(rename('styles.css'))
    .pipe(gulp.dest('./assets/css/'));
});

gulp.task('watch', () => {
  gulp.watch(paths.watchSCSS, ['sass']);
});

gulp.task('watch-compress', () => {
  gulp.watch(paths.watchScripts, ['compress']);
});

gulp.task('script_compress', ['compress', 'watch-compress']);
gulp.task('sass_to_css', ['sass', 'watch']);
gulp.task('images-optimization', ['optimize-images']);
gulp.task('images-template-optimization', ['optimize-template-images']);