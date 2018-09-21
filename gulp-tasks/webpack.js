var gulp = require('gulp');
var webpack = require('webpack-stream');
var path = require('path');
var concat = require('gulp-concat');

var paths = {
    tmp: './tmp',
    root: './',
    dist: './dist/',
    src: './src/'
};

gulp.task('js:vanilla', function () {
    return gulp.src(path.join(paths.src + 'Cleave.js'))
        .pipe(webpack({
            output: {
                library: 'Cleave',
                libraryTarget: 'umd',
                filename: 'cleave.js'
            }
        }))
        .pipe(gulp.dest(paths.dist));
});

var module = {
    loaders: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react', 'stage-0']
            }
        }
    ]
};
