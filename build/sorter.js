function getImportName (str) {
  return str.substring(4, str.indexOf('.'))
}

module.exports = function (a) {
  var rows = a.split('\n').sort(function (a, b) {
    var aImport = getImportName(a)
    var bImport = getImportName(b)
    if (b.indexOf(aImport) >= 0) {
      return -1
    } else if (a.indexOf(bImport) >= 0) {
      return 1
    } else {
      return 0
    }
  })
  return rows.map(function (row) {
    return row.split(':')[0]
  }).filter(function (item, i, array) {
    return array.lastIndexOf(item) === i
  }).join('\n')
}
