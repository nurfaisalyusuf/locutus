XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var sql_regcase = require('/Users/kvz/code/phpjs/src/php/pcre/sql_regcase.js')

describe('php.pcre.sql_regcase.js', function () {
  it('should pass example 1', function (done) {
    sql_regcase('Foo - bar.');
    var expected = '[Ff][Oo][Oo] - [Bb][Aa][Rr].'
    var result = sql_regcase('Foo - bar.');
    expect(result).to.deep.equal(expected)
    done()
  })
})