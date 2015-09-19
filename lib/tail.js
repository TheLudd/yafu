module.exports = tail

const drop = require('./drop')
const isEmpty = require('./is-empty')
const Maybe = require('./maybe')

function tail (arr) {
  return Maybe.nothingIf(isEmpty, arr).map(drop(1))
}
