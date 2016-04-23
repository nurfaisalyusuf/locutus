XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var array = require('/Users/kvz/code/phpjs/src/php/array/array')
var array_search = require('/Users/kvz/code/phpjs/src/php/array/array_search.js')

describe.skip('php.array.array_search.js', function () {
  it('should pass example 1', function (done) {
    array_search('zonneveld', {firstname: 'kevin', middle: 'van', surname: 'zonneveld'});
    var expected = 'surname'
    var result = array_search('zonneveld', {firstname: 'kevin', middle: 'van', surname: 'zonneveld'});
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    ini_set('locutus.return_locutus_arrays', 'on');
    var ordered_arr = array({3:'value'}, {2:'value'}, {'a':'value'}, {'b':'value'});
    array_search(/val/g, ordered_arr); // or var key = ordered_arr.search(/val/g);
    var expected = '3'
ini_set('locutus.return_locutus_arrays', 'on');
var ordered_arr = array({3:'value'}, {2:'value'}, {'a':'value'}, {'b':'value'});
    var result = array_search(/val/g, ordered_arr); // or var key = ordered_arr.search(/val/g);
    expect(result).to.deep.equal(expected)
    done()
  })
})