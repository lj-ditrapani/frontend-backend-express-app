var $ = require('jquery')

var foo = require('./foo.js')

console.log(foo())

$('body').append('<p>' + foo() + '</p>')
