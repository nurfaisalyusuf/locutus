XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var decbin = require('/Users/kvz/code/phpjs/src/php/math/decbin.js')

describe('php.math.decbin.js', function () {
  it('should pass example 1', function (done) {
    decbin(12);
    var expected = '1100'
    var result = decbin(12);
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    decbin(26);
    var expected = '11010'
    var result = decbin(26);
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    decbin('26');
    var expected = '11010'
    var result = decbin('26');
    expect(result).to.deep.equal(expected)
    done()
  })
})