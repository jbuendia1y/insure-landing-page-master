const gulp = require('gulp')

const pug = require('gulp-pug')
const sass = require('gulp-sass')
const babel = require('gulp-babel')

gulp.task('view',()=>{
    return gulp.src('./src/views/pages/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('./docs'))
})

gulp.task('sass',()=>{
    return gulp.src('./src/sass/*.scss')
        .pipe(sass().on('error',sass.logError))
        .pipe(gulp.dest('./docs/css'))
})

gulp.task('babel',()=>{
    return gulp.src('./src/js/*.js')
        .pipe(babel({
            presets : ['@babel/env']
        }))
        .pipe(gulp.dest('./docs/js'))
})

gulp.task('default',()=>{
    gulp.watch('./src/views/pages/*.pug',gulp.series('view'))
    gulp.watch('./src/sass/*.scss',gulp.series('sass'))
    gulp.watch('./src/js/*.js',gulp.series('babel'))
})