var browserify = require('browserify')
var fs = require('fs')
var path = require('path')

var files = fs.readdirSync(path.join(__dirname, 'src'))
var b = browserify(files.map((file)=>path.join(__dirname, 'src', file)))
b.plugin('factor-bundle', {outputs: files.map((file)=>path.join(__dirname, 'dist', file))})
b.bundle().pipe(fs.createWriteStream(path.join(__dirname, 'dist/bundle.js')))