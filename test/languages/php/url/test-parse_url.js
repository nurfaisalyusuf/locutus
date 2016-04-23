XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var parse_url = require('/Users/kvz/code/phpjs/src/php/url/parse_url.js')

describe('php.url.parse_url.js', function () {
  it('should pass example 1', function (done) {
    parse_url('http://username:password@hostname/path?arg=value#anchor');
    var expected = {scheme: 'http', host: 'hostname', user: 'username', pass: 'password', path: '/path', query: 'arg=value', fragment: 'anchor'}
    var result = parse_url('http://username:password@hostname/path?arg=value#anchor');
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    parse_url('http://en.wikipedia.org/wiki/%22@%22_%28album%29');
    var expected = {scheme: 'http', host: 'en.wikipedia.org', path: '/wiki/%22@%22_%28album%29'}
    var result = parse_url('http://en.wikipedia.org/wiki/%22@%22_%28album%29');
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    parse_url('https://host.domain.tld/a@b.c/folder')
    var expected = {scheme: 'https', host: 'host.domain.tld', path: '/a@b.c/folder'}
    var result = parse_url('https://host.domain.tld/a@b.c/folder')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 4', function (done) {
    parse_url('https://gooduser:secretpassword@www.example.com/a@b.c/folder?foo=bar');
    var expected = { scheme: 'https', host: 'www.example.com', path: '/a@b.c/folder', query: 'foo=bar', user: 'gooduser', pass: 'secretpassword' }
    var result = parse_url('https://gooduser:secretpassword@www.example.com/a@b.c/folder?foo=bar');
    expect(result).to.deep.equal(expected)
    done()
  })
})