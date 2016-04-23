XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var md5 = require('/Users/kvz/code/phpjs/src/php/strings/md5.js')

describe('php.strings.md5.js', function () {
  it('should pass example 1', function (done) {
    md5('Kevin van Zonneveld');
    var expected = '6e658d4bfcb59cc13f96c14450ac40b9'
    var result = md5('Kevin van Zonneveld');
    expect(result).to.deep.equal(expected)
    done()
  })
})