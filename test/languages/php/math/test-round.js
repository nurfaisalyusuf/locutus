XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var round = require('/Users/kvz/code/phpjs/src/php/math/round.js')

describe('php.math.round.js', function () {
  it('should pass example 1', function (done) {
    round(1241757, -3);
    var expected = 1242000
    var result = round(1241757, -3);
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    round(3.6);
    var expected = 4
    var result = round(3.6);
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    round(2.835, 2);
    var expected = 2.84
    var result = round(2.835, 2);
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 4', function (done) {
    round(1.1749999999999, 2);
    var expected = 1.17
    var result = round(1.1749999999999, 2);
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 5', function (done) {
    round(58551.799999999996, 2);
    var expected = 58551.8
    var result = round(58551.799999999996, 2);
    expect(result).to.deep.equal(expected)
    done()
  })
})