XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var strnatcasecmp = require('/Users/kvz/code/phpjs/src/php/strings/strnatcasecmp.js')

describe.skip('php.strings.strnatcasecmp.js', function () {
  it('should pass example 1', function (done) {
    strnatcasecmp(10, 1);
    var expected = 1
    var result = strnatcasecmp(10, 1);
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    strnatcasecmp('1', '10');
    var expected = -1
    var result = strnatcasecmp('1', '10');
    expect(result).to.deep.equal(expected)
    done()
  })
})