XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var is_callable = require('/Users/kvz/code/phpjs/src/php/var/is_callable.js')

describe.skip('php.var.is_callable.js', function () {
  it('should pass example 1', function (done) {
    is_callable('is_callable');
    var expected = true
    var result = is_callable('is_callable');
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    is_callable('bogusFunction', true);
    var expected = true // gives true because does not do strict checking
    var result = is_callable('bogusFunction', true);
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    function SomeClass () {}
    SomeClass.prototype.someMethod = function (){};
    var testObj = new SomeClass();
    is_callable([testObj, 'someMethod'], true, 'myVar');
    $result = myVar;
    var expected = 'SomeClass::someMethod'
function SomeClass () {}
SomeClass.prototype.someMethod = function (){};
var testObj = new SomeClass();
is_callable([testObj, 'someMethod'], true, 'myVar');
    var result = $result = myVar;
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 4', function (done) {
    is_callable(function () {});
    var expected = true
    var result = is_callable(function () {});
    expect(result).to.deep.equal(expected)
    done()
  })
})