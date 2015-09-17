module.exports = satisfiesAll

function satisfiesAll (predicates, val) {
  var out = true
  for (var i = 0; i < predicates.length; ++i) {
    out = out && predicates[i](val)
  }
  return out
}
