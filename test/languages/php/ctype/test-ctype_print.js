XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var ctype_print = require('/Users/kvz/code/phpjs/src/php/ctype/ctype_print.js')

describe('php.ctype.ctype_print.js', function () {
  it('should pass example 1', function (done) {
    ctype_print('AbC!#12');
    var expected = true
    var result = ctype_print('AbC!#12');
    expect(result).to.deep.equal(expected)
    done()
  })
})