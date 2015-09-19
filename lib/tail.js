module.exports = tail

const isEmpty = require('./is-empty')
const Maybe = require('./maybe')

function tail (arr) {
  return Maybe.nothingIf(isEmpty, arr).map(function (a) {
    return a.slice(1, a.length)
  })
}
