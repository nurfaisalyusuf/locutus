XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var doubleval = require('/Users/kvz/code/phpjs/src/php/var/doubleval.js')

describe('php.var.doubleval.js', function () {
  it('should pass example 1', function (done) {
    doubleval(186);
    var expected = 186.00
    var result = doubleval(186);
    expect(result).to.deep.equal(expected)
    done()
  })
})