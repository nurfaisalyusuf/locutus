XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var strripos = require('/Users/kvz/code/phpjs/src/php/strings/strripos.js')

describe('php.strings.strripos.js', function () {
  it('should pass example 1', function (done) {
    strripos('Kevin van Zonneveld', 'E');
    var expected = 16
    var result = strripos('Kevin van Zonneveld', 'E');
    expect(result).to.deep.equal(expected)
    done()
  })
})