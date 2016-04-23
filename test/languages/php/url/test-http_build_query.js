XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var http_build_query = require('/Users/kvz/code/phpjs/src/php/url/http_build_query.js')

describe('php.url.http_build_query.js', function () {
  it('should pass example 1', function (done) {
    http_build_query({foo: 'bar', php: 'hypertext processor', baz: 'boom', cow: 'milk'}, '', '&amp;');
    var expected = 'foo=bar&amp;php=hypertext+processor&amp;baz=boom&amp;cow=milk'
    var result = http_build_query({foo: 'bar', php: 'hypertext processor', baz: 'boom', cow: 'milk'}, '', '&amp;');
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    http_build_query({'php': 'hypertext processor', 0: 'foo', 1: 'bar', 2: 'baz', 3: 'boom', 'cow': 'milk'}, 'myvar_');
    var expected = 'myvar_0=foo&myvar_1=bar&myvar_2=baz&myvar_3=boom&php=hypertext+processor&cow=milk'
    var result = http_build_query({'php': 'hypertext processor', 0: 'foo', 1: 'bar', 2: 'baz', 3: 'boom', 'cow': 'milk'}, 'myvar_');
    expect(result).to.deep.equal(expected)
    done()
  })
})