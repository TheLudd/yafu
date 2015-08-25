var curry = require('./curry')
module.exports = curry(compose)

function compose (f, g, x) {
  return f(g(x))
}
