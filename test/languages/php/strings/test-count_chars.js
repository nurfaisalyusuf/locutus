XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var count_chars = require('/Users/kvz/code/phpjs/src/php/strings/count_chars.js')

describe('php.strings.count_chars.js', function () {
  it('should pass example 1', function (done) {
    count_chars("Hello World!", 3);
    var expected = " !HWdelor"
    var result = count_chars("Hello World!", 3);
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    count_chars("Hello World!", 1);
    var expected = {32:1,33:1,72:1,87:1,100:1,101:1,108:3,111:2,114:1}
    var result = count_chars("Hello World!", 1);
    expect(result).to.deep.equal(expected)
    done()
  })
})