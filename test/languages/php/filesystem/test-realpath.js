XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var realpath = require('/Users/kvz/code/phpjs/src/php/filesystem/realpath.js')

describe('php.filesystem.realpath.js', function () {
  it.skip('should pass example 1', function (done) {
    realpath('../.././_supporters/pj_test_supportfile_1.htm');
    var expected = 'file:/home/kevin/code/_supporters/pj_test_supportfile_1.htm'
    var result = realpath('../.././_supporters/pj_test_supportfile_1.htm');
    expect(result).to.deep.equal(expected)
    done()
  })
})