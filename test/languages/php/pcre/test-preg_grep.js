XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var preg_grep = require('/Users/kvz/code/phpjs/src/php/pcre/preg_grep.js')

describe('php.pcre.preg_grep.js', function () {
  it('should pass example 1', function (done) {
    var arr = [1, 4, 4.5, 3, 'a', 4.4];
    preg_grep("/^(\\d+)?\\.\\d+$/", arr);
    var expected = {2: 4.5, 5: 4.4}
var arr = [1, 4, 4.5, 3, 'a', 4.4];
    var result = preg_grep("/^(\\d+)?\\.\\d+$/", arr);
    expect(result).to.deep.equal(expected)
    done()
  })
})