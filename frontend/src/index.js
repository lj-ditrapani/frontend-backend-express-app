var $ = require('jquery')
var foo = require('./foo.js')

$(function () {
  $('body').append('<p>' + foo() + '</p>')
  $('#main').append('<p>jQuery FTW</p>')
  console.log(foo())
})
