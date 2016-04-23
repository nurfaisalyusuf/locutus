XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var hexdec = require('/Users/kvz/code/phpjs/src/php/math/hexdec.js')

describe('php.math.hexdec.js', function () {
  it('should pass example 1', function (done) {
    hexdec('that');
    var expected = 10
    var result = hexdec('that');
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    hexdec('a0');
    var expected = 160
    var result = hexdec('a0');
    expect(result).to.deep.equal(expected)
    done()
  })
})