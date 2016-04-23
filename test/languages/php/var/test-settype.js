XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var settype = require('/Users/kvz/code/phpjs/src/php/var/settype.js')

describe('php.var.settype.js', function () {
  it('should pass example 1', function (done) {
    foo = '5bar';
    settype('foo', 'integer');
    $result = foo
    var expected = 5
foo = '5bar';
settype('foo', 'integer');
    var result = $result = foo
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    foo = true;
    settype('foo', 'string');
    $result = foo
    var expected = '1'
foo = true;
settype('foo', 'string');
    var result = $result = foo
    expect(result).to.deep.equal(expected)
    done()
  })
})