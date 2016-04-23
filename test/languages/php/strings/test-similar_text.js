XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var similar_text = require('/Users/kvz/code/phpjs/src/php/strings/similar_text.js')

describe('php.strings.similar_text.js', function () {
  it('should pass example 1', function (done) {
    similar_text('Hello World!', 'Hello locutus!');
    var expected = 8
    var result = similar_text('Hello World!', 'Hello locutus!');
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    similar_text('Hello World!', null);
    var expected = 0
    var result = similar_text('Hello World!', null);
    expect(result).to.deep.equal(expected)
    done()
  })
})