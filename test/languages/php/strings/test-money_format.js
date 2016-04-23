XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var money_format = require('/Users/kvz/code/phpjs/src/php/strings/money_format.js')

describe('php.strings.money_format.js', function () {
  it('should pass example 1', function (done) {
    money_format('%i', 1234.56);
    var expected = ' USD 1,234.56'
    var result = money_format('%i', 1234.56);
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    money_format('%14#8.2n', 1234.5678);
    var expected = ' $     1,234.57'
    var result = money_format('%14#8.2n', 1234.5678);
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    money_format('%14#8.2n', -1234.5678);
    var expected = '-$     1,234.57'
    var result = money_format('%14#8.2n', -1234.5678);
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 4', function (done) {
    money_format('%(14#8.2n', 1234.5678);
    var expected = ' $     1,234.57 '
    var result = money_format('%(14#8.2n', 1234.5678);
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 5', function (done) {
    money_format('%(14#8.2n', -1234.5678);
    var expected = '($     1,234.57)'
    var result = money_format('%(14#8.2n', -1234.5678);
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 6', function (done) {
    money_format('%=014#8.2n', 1234.5678);
    var expected = ' $000001,234.57'
    var result = money_format('%=014#8.2n', 1234.5678);
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 7', function (done) {
    money_format('%=014#8.2n', -1234.5678);
    var expected = '-$000001,234.57'
    var result = money_format('%=014#8.2n', -1234.5678);
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 8', function (done) {
    money_format('%=*14#8.2n', 1234.5678);
    var expected = ' $*****1,234.57'
    var result = money_format('%=*14#8.2n', 1234.5678);
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 9', function (done) {
    money_format('%=*14#8.2n', -1234.5678);
    var expected = '-$*****1,234.57'
    var result = money_format('%=*14#8.2n', -1234.5678);
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 10', function (done) {
    money_format('%=*^14#8.2n', 1234.5678);
    var expected = '  $****1234.57'
    var result = money_format('%=*^14#8.2n', 1234.5678);
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 11', function (done) {
    money_format('%=*^14#8.2n', -1234.5678);
    var expected = ' -$****1234.57'
    var result = money_format('%=*^14#8.2n', -1234.5678);
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 12', function (done) {
    money_format('%=*!14#8.2n', 1234.5678);
    var expected = ' *****1,234.57'
    var result = money_format('%=*!14#8.2n', 1234.5678);
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 13', function (done) {
    money_format('%=*!14#8.2n', -1234.5678);
    var expected = '-*****1,234.57'
    var result = money_format('%=*!14#8.2n', -1234.5678);
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 14', function (done) {
    money_format('%i', 3590);
    var expected = ' USD 3,590.00'
    var result = money_format('%i', 3590);
    expect(result).to.deep.equal(expected)
    done()
  })
})