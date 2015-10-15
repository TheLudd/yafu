module.exports = function (a) {
  var rows = a.split('\n')
  return rows.map(function (row) {
    return row.split(':')[0]
  }).join('\n')
}
