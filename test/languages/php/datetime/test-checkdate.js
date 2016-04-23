XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var checkdate = require('/Users/kvz/code/phpjs/src/php/datetime/checkdate.js')

describe('php.datetime.checkdate.js', function () {
  it('should pass example 1', function (done) {
    checkdate(12, 31, 2000);
    var expected = true
    var result = checkdate(12, 31, 2000);
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    checkdate(2, 29, 2001);
    var expected = false
    var result = checkdate(2, 29, 2001);
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    checkdate(3, 31, 2008);
    var expected = true
    var result = checkdate(3, 31, 2008);
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 4', function (done) {
    checkdate(1, 390, 2000);
    var expected = false
    var result = checkdate(1, 390, 2000);
    expect(result).to.deep.equal(expected)
    done()
  })
})