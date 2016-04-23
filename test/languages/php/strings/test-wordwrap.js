XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var wordwrap = require('/Users/kvz/code/phpjs/src/php/strings/wordwrap.js')

describe('php.strings.wordwrap.js', function () {
  it('should pass example 1', function (done) {
    wordwrap('Kevin van Zonneveld', 6, '|', true);
    var expected = 'Kevin |van |Zonnev|eld'
    var result = wordwrap('Kevin van Zonneveld', 6, '|', true);
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    wordwrap('The quick brown fox jumped over the lazy dog.', 20, '<br />\n');
    var expected = 'The quick brown fox <br />\njumped over the lazy<br />\n dog.'
    var result = wordwrap('The quick brown fox jumped over the lazy dog.', 20, '<br />\n');
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    wordwrap('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.');
    var expected = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod \ntempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim \nveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea \ncommodo consequat.'
    var result = wordwrap('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.');
    expect(result).to.deep.equal(expected)
    done()
  })
})