XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var strip_tags = require('/Users/kvz/code/phpjs/src/php/strings/strip_tags.js')

describe('php.strings.strip_tags.js', function () {
  it('should pass example 1', function (done) {
    strip_tags('<p>Kevin</p> <br /><b>van</b> <i>Zonneveld</i>', '<i><b>');
    var expected = 'Kevin <b>van</b> <i>Zonneveld</i>'
    var result = strip_tags('<p>Kevin</p> <br /><b>van</b> <i>Zonneveld</i>', '<i><b>');
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    strip_tags('<p>Kevin <img src="someimage.png" onmouseover="someFunction()">van <i>Zonneveld</i></p>', '<p>');
    var expected = '<p>Kevin van Zonneveld</p>'
    var result = strip_tags('<p>Kevin <img src="someimage.png" onmouseover="someFunction()">van <i>Zonneveld</i></p>', '<p>');
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    strip_tags("<a href='http://kevin.vanzonneveld.net'>Kevin van Zonneveld</a>", "<a>");
    var expected = "<a href='http://kevin.vanzonneveld.net'>Kevin van Zonneveld</a>"
    var result = strip_tags("<a href='http://kevin.vanzonneveld.net'>Kevin van Zonneveld</a>", "<a>");
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 4', function (done) {
    strip_tags('1 < 5 5 > 1');
    var expected = '1 < 5 5 > 1'
    var result = strip_tags('1 < 5 5 > 1');
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 5', function (done) {
    strip_tags('1 <br/> 1');
    var expected = '1  1'
    var result = strip_tags('1 <br/> 1');
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 6', function (done) {
    strip_tags('1 <br/> 1', '<br>');
    var expected = '1 <br/> 1'
    var result = strip_tags('1 <br/> 1', '<br>');
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 7', function (done) {
    strip_tags('1 <br/> 1', '<br><br/>');
    var expected = '1 <br/> 1'
    var result = strip_tags('1 <br/> 1', '<br><br/>');
    expect(result).to.deep.equal(expected)
    done()
  })
})