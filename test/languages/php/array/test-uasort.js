XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var uasort = require('/Users/kvz/code/phpjs/src/php/array/uasort.js')

describe('php.array.uasort.js', function () {
  it('should pass example 1', function (done) {
    var sorter = function (a, b) { if (a > b) {return 1;}if (a < b) {return -1;} return 0;}
    $fruits = {d: 'lemon', a: 'orange', b: 'banana', c: 'apple'}
    uasort($fruits, sorter)
    $results = $fruits
    var expected = {c: 'apple', b: 'banana', d: 'lemon', a: 'orange'}
var sorter = function (a, b) { if (a > b) {return 1;}if (a < b) {return -1;} return 0;}
$fruits = {d: 'lemon', a: 'orange', b: 'banana', c: 'apple'}
uasort($fruits, sorter)
    var result = $results = $fruits
    expect(result).to.deep.equal(expected)
    done()
  })
})