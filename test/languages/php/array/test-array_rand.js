XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var array_rand = require('/Users/kvz/code/phpjs/src/php/array/array_rand.js')

describe('php.array.array_rand.js', function () {
  it('should pass example 1', function (done) {
    array_rand( ['Kevin'], 1 );
    var expected = 0
    var result = array_rand( ['Kevin'], 1 );
    expect(result).to.deep.equal(expected)
    done()
  })
})