XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var get_defined_functions = require('/Users/kvz/code/phpjs/src/php/funchand/get_defined_functions.js')

describe('php.funchand.get_defined_functions.js', function () {
  it.skip('should pass example 1', function (done) {
    function test_in_array (array, p_val) {for(var i = 0, l = array.length; i < l; i++) {if(array[i] === p_val) return true;} return false;}
    funcs = get_defined_functions();
    found = test_in_array(funcs, 'get_defined_functions');
    $result = found;
    var expected = true
function test_in_array (array, p_val) {for(var i = 0, l = array.length; i < l; i++) {if(array[i] === p_val) return true;} return false;}
funcs = get_defined_functions();
found = test_in_array(funcs, 'get_defined_functions');
    var result = $result = found;
    expect(result).to.deep.equal(expected)
    done()
  })
})