var $ = require('jquery')

var foo = require('./foo.js')

$('body').append('<p>' + foo() + '</p>')

console.log(foo())

$('body').append('<p>' + foo() + '</p>')
