XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var is_nan = require('/Users/kvz/code/phpjs/src/php/math/is_nan.js')

describe('php.math.is_nan.js', function () {
  it('should pass example 1', function (done) {
    is_nan(NaN);
    var expected = true
    var result = is_nan(NaN);
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    is_nan(0);
    var expected = false
    var result = is_nan(0);
    expect(result).to.deep.equal(expected)
    done()
  })
})