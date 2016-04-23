XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var hypot = require('/Users/kvz/code/phpjs/src/php/math/hypot.js')

describe('php.math.hypot.js', function () {
  it('should pass example 1', function (done) {
    hypot(3, 4);
    var expected = 5
    var result = hypot(3, 4);
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    hypot([], 'a');
    var expected = null
    var result = hypot([], 'a');
    expect(result).to.deep.equal(expected)
    done()
  })
})