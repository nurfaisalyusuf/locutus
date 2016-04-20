module.exports = function next (arr) {
  //  discuss at: http://locutusjs.io/php/next/
  // original by: Brett Zamir (http://brett-zamir.me)
  //        note: Uses global: locutus to store the array pointer
  //   example 1: transport = ['foot', 'bike', 'car', 'plane'];
  //   example 1: next(transport);
  //   example 1: next(transport);
  //   returns 1: 'car'

  this.locutus = this.locutus || {}
  this.locutus.pointers = this.locutus.pointers || []
  var indexOf = function (value) {
    for (var i = 0, length = this.length; i < length; i++) {
      if (this[i] === value) {
        return i
      }
    }
    return -1
  }
  // END REDUNDANT
  var pointers = this.locutus.pointers
  if (!pointers.indexOf) {
    pointers.indexOf = indexOf
  }
  if (pointers.indexOf(arr) === -1) {
    pointers.push(arr, 0)
  }
  var arrpos = pointers.indexOf(arr)
  var cursor = pointers[arrpos + 1]
  if (Object.prototype.toString.call(arr) !== '[object Array]') {
    var ct = 0
    for (var k in arr) {
      if (ct === cursor + 1) {
        pointers[arrpos + 1] += 1
        return arr[k]
      }
      ct++
    }
    // End
    return false
  }
  if (arr.length === 0 || cursor === (arr.length - 1)) {
    return false
  }
  pointers[arrpos + 1] += 1
  return arr[pointers[arrpos + 1]]
}