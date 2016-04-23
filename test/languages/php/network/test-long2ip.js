XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var long2ip = require('/Users/kvz/code/phpjs/src/php/network/long2ip.js')

describe('php.network.long2ip.js', function () {
  it('should pass example 1', function (done) {
    long2ip( 3221234342 );
    var expected = '192.0.34.166'
    var result = long2ip( 3221234342 );
    expect(result).to.deep.equal(expected)
    done()
  })
})