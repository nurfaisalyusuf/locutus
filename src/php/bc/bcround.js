module.exports = function bcround (val, precision) {
  //  discuss at: http://locutusjs.io/php/bcround/
  // original by: lmeyrick (https://sourceforge.net/projects/bcmath-js/)
  //   example 1: bcround(1, 2);
  //   returns 1: 3
  //        todo: implement these testcases
  //        test: skip-1

  var _locutus_shared_bc = require('../_locutus_shared/_locutus_shared_bc')
  var libbcmath = _locutus_shared_bc()

  var temp, result, digit
  var right_operand

  // create number
  temp = libbcmath.bc_init_num()
  temp = libbcmath.php_str2num(val.toString())

  // check if any rounding needs
  if (precision >= temp.n_scale) {
    // nothing to round, just add the zeros.
    while (temp.n_scale < precision) {
      temp.n_value[temp.n_len + temp.n_scale] = 0
      temp.n_scale++
    }
    return temp.toString()
  }

  // get the digit we are checking (1 after the precision)
  // loop through digits after the precision marker
  digit = temp.n_value[temp.n_len + precision]

  right_operand = libbcmath.bc_init_num()
  right_operand = libbcmath.bc_new_num(1, precision)

  if (digit >= 5) {
    // round away from zero by adding 1 (or -1) at the "precision".. ie 1.44999 @ 3dp = (1.44999 + 0.001).toString().substr(0,5)
    right_operand.n_value[right_operand.n_len + right_operand.n_scale - 1] = 1
    if (temp.n_sign === libbcmath.MINUS) {
      // round down
      right_operand.n_sign = libbcmath.MINUS
    }
    result = libbcmath.bc_add(temp, right_operand, precision)
  } else {
    // leave-as-is.. just truncate it.
    result = temp
  }

  if (result.n_scale > precision) {
    result.n_scale = precision
  }
  return result.toString()
}
