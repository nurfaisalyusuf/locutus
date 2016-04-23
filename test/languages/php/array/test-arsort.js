XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var arsort = require('/Users/kvz/code/phpjs/src/php/array/arsort.js')

describe('php.array.arsort.js', function () {
  it.skip('should pass example 1', function (done) {
    data = {d: 'lemon', a: 'orange', b: 'banana', c: 'apple'};
    data = arsort(data);
    var expected = data === {a: 'orange', d: 'lemon', b: 'banana', c: 'apple'}
data = {d: 'lemon', a: 'orange', b: 'banana', c: 'apple'};
    var result = data = arsort(data);
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    ini_set('locutus.strictForIn', true);
    data = {d: 'lemon', a: 'orange', b: 'banana', c: 'apple'};
    arsort(data);
    $result = data;
    var expected = {a: 'orange', d: 'lemon', b: 'banana', c: 'apple'}
ini_set('locutus.strictForIn', true);
data = {d: 'lemon', a: 'orange', b: 'banana', c: 'apple'};
arsort(data);
    var result = $result = data;
    expect(result).to.deep.equal(expected)
    done()
  })
})