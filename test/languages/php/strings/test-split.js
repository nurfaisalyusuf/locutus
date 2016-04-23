XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var split = require('/Users/kvz/code/phpjs/src/php/strings/split.js')

describe('php.strings.split.js', function () {
  it('should pass example 1', function (done) {
    split(' ', 'Kevin van Zonneveld');
    var expected = ['Kevin', 'van', 'Zonneveld']
    var result = split(' ', 'Kevin van Zonneveld');
    expect(result).to.deep.equal(expected)
    done()
  })
})