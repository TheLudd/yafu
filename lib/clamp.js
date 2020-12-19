import curry from './curry'
export default curry(_clamp)

/**
  * The function enables selecting a middle value
  * within a range of values between a defined minimum and maximum.
  *
  * @function clamp
  * @arg l {Number} The lower bound
  * @arg u {Number} The upper bound
  * @arg v {Number} The value that needs to be clamped
  * @return {number}
  */

function _clamp (l, u, v) {
  if (v > u) return u
  if (v < l) return l
  return v
}
