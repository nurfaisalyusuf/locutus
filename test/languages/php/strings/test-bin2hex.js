XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var bin2hex = require('/Users/kvz/code/phpjs/src/php/strings/bin2hex.js')

describe('php.strings.bin2hex.js', function () {
  it('should pass example 1', function (done) {
    bin2hex('Kev');
    var expected = '4b6576'
    var result = bin2hex('Kev');
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    bin2hex(String.fromCharCode(0x00));
    var expected = '00'
    var result = bin2hex(String.fromCharCode(0x00));
    expect(result).to.deep.equal(expected)
    done()
  })
})