XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var ord = require('/Users/kvz/code/phpjs/src/php/strings/ord.js')

describe('php.strings.ord.js', function () {
  it('should pass example 1', function (done) {
    ord('K');
    var expected = 75
    var result = ord('K');
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    ord('\uD800\uDC00'); // surrogate pair to create a single Unicode character
    var expected = 65536
    var result = ord('\uD800\uDC00'); // surrogate pair to create a single Unicode character
    expect(result).to.deep.equal(expected)
    done()
  })
})