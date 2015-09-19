module.exports = head

const Maybe = require('./maybe')

function head (arr) {
  return Maybe.from(arr[0])
}
