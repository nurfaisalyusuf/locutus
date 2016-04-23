XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var array_pad = require('/Users/kvz/code/phpjs/src/php/array/array_pad.js')

describe('php.array.array_pad.js', function () {
  it('should pass example 1', function (done) {
    array_pad([ 7, 8, 9 ], 2, 'a');
    var expected = [ 7, 8, 9]
    var result = array_pad([ 7, 8, 9 ], 2, 'a');
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    array_pad([ 7, 8, 9 ], 5, 'a');
    var expected = [ 7, 8, 9, 'a', 'a']
    var result = array_pad([ 7, 8, 9 ], 5, 'a');
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    array_pad([ 7, 8, 9 ], 5, 2);
    var expected = [ 7, 8, 9, 2, 2]
    var result = array_pad([ 7, 8, 9 ], 5, 2);
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 4', function (done) {
    array_pad([ 7, 8, 9 ], -5, 'a');
    var expected = [ 'a', 'a', 7, 8, 9 ]
    var result = array_pad([ 7, 8, 9 ], -5, 'a');
    expect(result).to.deep.equal(expected)
    done()
  })
})