module.exports = function bcsub (left_operand, right_operand, scale) {
  //  discuss at: http://locutusjs.io/php/bcsub/
  // original by: lmeyrick (https://sourceforge.net/projects/bcmath-js/)
  //   example 1: bcsub(1, 2);
  //   returns 1: -1
  //        todo: implement these testcases
  //        test: skip-1

  var _locutus_shared_bc = require('../_locutus_shared/_locutus_shared_bc')
  var libbcmath = _locutus_shared_bc()

  var first, second, result

  if (typeof scale === 'undefined') {
    scale = libbcmath.scale
  }
  scale = ((scale < 0) ? 0 : scale)

  // create objects
  first = libbcmath.bc_init_num()
  second = libbcmath.bc_init_num()
  result = libbcmath.bc_init_num()

  first = libbcmath.php_str2num(left_operand.toString())
  second = libbcmath.php_str2num(right_operand.toString())

  result = libbcmath.bc_sub(first, second, scale)

  if (result.n_scale > scale) {
    result.n_scale = scale
  }

  return result.toString()
}
