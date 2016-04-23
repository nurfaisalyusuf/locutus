XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var array_intersect_assoc = require('/Users/kvz/code/phpjs/src/php/array/array_intersect_assoc.js')

describe('php.array.array_intersect_assoc.js', function () {
  it('should pass example 1', function (done) {
    $array1 = {a: 'green', b: 'brown', c: 'blue', 0: 'red'}
    $array2 = {a: 'green', 0: 'yellow', 1: 'red'}
    array_intersect_assoc($array1, $array2)
    var expected = {a: 'green'}
$array1 = {a: 'green', b: 'brown', c: 'blue', 0: 'red'}
$array2 = {a: 'green', 0: 'yellow', 1: 'red'}
    var result = array_intersect_assoc($array1, $array2)
    expect(result).to.deep.equal(expected)
    done()
  })
})