XMLHttpRequest = {}
window = {window: {},document: {lastModified: 1388954399,getElementsByTagName: function(){return [];}},location: {href: ""}}
process.env.TZ = 'UTC'
window.window = window
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set')
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get')
var array_chunk = require('/Users/kvz/code/phpjs/src/php/array/array_chunk.js')

describe('php.array.array_chunk.js', function () {
  it('should pass example 1', function (done) {
    array_chunk(['Kevin', 'van', 'Zonneveld'], 2);
    var expected = [['Kevin', 'van'], ['Zonneveld']]
    var result = array_chunk(['Kevin', 'van', 'Zonneveld'], 2);
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    array_chunk(['Kevin', 'van', 'Zonneveld'], 2, true);
    var expected = [{0:'Kevin', 1:'van'}, {2: 'Zonneveld'}]
    var result = array_chunk(['Kevin', 'van', 'Zonneveld'], 2, true);
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    array_chunk({1:'Kevin', 2:'van', 3:'Zonneveld'}, 2);
    var expected = [['Kevin', 'van'], ['Zonneveld']]
    var result = array_chunk({1:'Kevin', 2:'van', 3:'Zonneveld'}, 2);
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 4', function (done) {
    array_chunk({1:'Kevin', 2:'van', 3:'Zonneveld'}, 2, true);
    var expected = [{1: 'Kevin', 2: 'van'}, {3: 'Zonneveld'}]
    var result = array_chunk({1:'Kevin', 2:'van', 3:'Zonneveld'}, 2, true);
    expect(result).to.deep.equal(expected)
    done()
  })
})