XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var array_count_values = require('/Users/kvz/code/phpjs/src/php/array/array_count_values.js')

describe('php.array.array_count_values.js', function () {
  it('should pass example 1', function (done) {
    array_count_values([ 3, 5, 3, "foo", "bar", "foo" ]);
    var expected = {3:2, 5:1, "foo":2, "bar":1}
    var result = array_count_values([ 3, 5, 3, "foo", "bar", "foo" ]);
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    array_count_values({ p1: 3, p2: 5, p3: 3, p4: "foo", p5: "bar", p6: "foo" });
    var expected = {3:2, 5:1, "foo":2, "bar":1}
    var result = array_count_values({ p1: 3, p2: 5, p3: 3, p4: "foo", p5: "bar", p6: "foo" });
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    array_count_values([ true, 4.2, 42, "fubar" ]);
    var expected = {42:1, "fubar":1}
    var result = array_count_values([ true, 4.2, 42, "fubar" ]);
    expect(result).to.deep.equal(expected)
    done()
  })
})