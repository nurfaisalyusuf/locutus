XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set.js')

describe('php.info.ini_set.js', function () {
  it('should pass example 1', function (done) {
    ini_set('date.timezone', 'Asia/Hong_Kong');
    ini_set('date.timezone', 'America/Chicago');
    var expected = 'Asia/Hong_Kong'
ini_set('date.timezone', 'Asia/Hong_Kong');
    var result = ini_set('date.timezone', 'America/Chicago');
    expect(result).to.deep.equal(expected)
    done()
  })
})