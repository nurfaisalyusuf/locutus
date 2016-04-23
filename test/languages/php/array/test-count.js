XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var count = require('/Users/kvz/code/phpjs/src/php/array/count.js')

describe('php.array.count.js', function () {
  it('should pass example 1', function (done) {
    count([[0,0],[0,-4]], 'COUNT_RECURSIVE');
    var expected = 6
    var result = count([[0,0],[0,-4]], 'COUNT_RECURSIVE');
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    count({'one' : [1,2,3,4,5]}, 'COUNT_RECURSIVE');
    var expected = 6
    var result = count({'one' : [1,2,3,4,5]}, 'COUNT_RECURSIVE');
    expect(result).to.deep.equal(expected)
    done()
  })
})