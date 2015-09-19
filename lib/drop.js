const curry = require('./curry')

module.exports = curry(drop)

function drop (n, a) {
  return a.slice(n)
}
