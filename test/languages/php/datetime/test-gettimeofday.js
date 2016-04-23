XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var gettimeofday = require('/Users/kvz/code/phpjs/src/php/datetime/gettimeofday.js')

describe.skip('php.datetime.gettimeofday.js', function () {
  it('should pass example 1', function (done) {
    gettimeofday();
    var expected = {sec: 12, usec: 153000, minuteswest: -480, dsttime: 0}
    var result = gettimeofday();
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    gettimeofday(true);
    var expected = 1238748978.49
    var result = gettimeofday(true);
    expect(result).to.deep.equal(expected)
    done()
  })
})