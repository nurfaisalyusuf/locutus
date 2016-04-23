XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var preg_quote = require('/Users/kvz/code/phpjs/src/php/pcre/preg_quote.js')

describe('php.pcre.preg_quote.js', function () {
  it('should pass example 1', function (done) {
    preg_quote("$40");
    var expected = '\\$40'
    var result = preg_quote("$40");
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    preg_quote("*RRRING* Hello?");
    var expected = '\\*RRRING\\* Hello\\?'
    var result = preg_quote("*RRRING* Hello?");
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    preg_quote("\\.+*?[^]$(){}=!<>|:");
    var expected = '\\\\\\.\\+\\*\\?\\[\\^\\]\\$\\(\\)\\{\\}\\=\\!\\<\\>\\|\\:'
    var result = preg_quote("\\.+*?[^]$(){}=!<>|:");
    expect(result).to.deep.equal(expected)
    done()
  })
})