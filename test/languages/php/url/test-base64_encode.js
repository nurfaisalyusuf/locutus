XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var base64_encode = require('/Users/kvz/code/phpjs/src/php/url/base64_encode.js')

describe('php.url.base64_encode.js', function () {
  it('should pass example 1', function (done) {
    base64_encode('Kevin van Zonneveld');
    var expected = 'S2V2aW4gdmFuIFpvbm5ldmVsZA=='
    var result = base64_encode('Kevin van Zonneveld');
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    base64_encode('a');
    var expected = 'YQ=='
    var result = base64_encode('a');
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    base64_encode('✓ à la mode');
    var expected = '4pyTIMOgIGxhIG1vZGU='
    var result = base64_encode('✓ à la mode');
    expect(result).to.deep.equal(expected)
    done()
  })
})