XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var Index = require('/Users/kvz/code/phpjs/src/golang/strings/Index2.js')

describe('golang.strings.Index2.js', function () {
  it('should pass example 1', function (done) {
    Index('Kevin', 'K')
    var expected = 0
    var result = Index('Kevin', 'K')
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    Index('Kevin', 'Z')
    var expected = -1
    var result = Index('Kevin', 'Z')
    expect(result).to.deep.equal(expected)
    done()
  })
})