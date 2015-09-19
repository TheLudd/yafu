module.exports = pipe

const head = require('./head')
const tail = require('./tail')

function pipe (fnList, x) {
  if (fnList.length === 0) {
    return x
  } else {
    let h = head(fnList)
    let t = tail(fnList)
    return pipe(t, h(x))
  }
}
