module.exports = all

function all (predicate, list) {
  var out = true
  for (var i = 0; i < list.length; ++i) {
    out = out && predicate(list[i])
  }
  return out
}
