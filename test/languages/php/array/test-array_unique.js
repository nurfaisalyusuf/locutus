XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var array_unique = require('/Users/kvz/code/phpjs/src/php/array/array_unique.js')

describe('php.array.array_unique.js', function () {
  it('should pass example 1', function (done) {
    array_unique(['Kevin','Kevin','van','Zonneveld','Kevin']);
    var expected = {0: 'Kevin', 2: 'van', 3: 'Zonneveld'}
    var result = array_unique(['Kevin','Kevin','van','Zonneveld','Kevin']);
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    array_unique({'a': 'green', 0: 'red', 'b': 'green', 1: 'blue', 2: 'red'});
    var expected = {a: 'green', 0: 'red', 1: 'blue'}
    var result = array_unique({'a': 'green', 0: 'red', 'b': 'green', 1: 'blue', 2: 'red'});
    expect(result).to.deep.equal(expected)
    done()
  })
})