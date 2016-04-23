XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var reset = require('/Users/kvz/code/phpjs/src/php/array/reset.js')

describe('php.array.reset.js', function () {
  it('should pass example 1', function (done) {
    reset({0: 'Kevin', 1: 'van', 2: 'Zonneveld'});
    var expected = 'Kevin'
    var result = reset({0: 'Kevin', 1: 'van', 2: 'Zonneveld'});
    expect(result).to.deep.equal(expected)
    done()
  })
})