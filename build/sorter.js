var glob = require('glob')
var path = require('path')
var fs = require('fs')

var files = glob.sync('./lib/*')
var promises = files.map(readFile)
var imports = files.map(getImport)
var importRegExp = /import \w+ from '(.*)'/g

var findImports = function (content) {
  var out = []
  var match
  while ((match = importRegExp.exec(content)) != null) {
    out.push(match[1])
  }
  return out
}

function contains (val, array) {
  return array.indexOf(val) > -1
}

function isTrue (x) {
  return x === true
}

Promise.all(promises).then(function (fileContents) {
  function isDependentUpon (a) {
    return function (b) {
      var bContent = fileContents[imports.indexOf(b)]
      var bImports = findImports(bContent)
      return contains(a, bImports) || bImports.map(isDependentUpon(a)).some(isTrue)
    }
  }
  var out = [ files.pop() ]
  files.forEach(function (f) {
    for (var i = 0, l = out.length; i < l; i++) {
      var v = out[i]
      if (isDependentUpon(getImport(f))(getImport(v))) {
        out.splice(i, 0, f)
        break
      } else if (i === out.length - 1) {
        out.push(f)
      }
    }
  })

  return out.join('\n')
}).then(function (r) {
  console.log(r)
}, function (e) {
  console.log(e)
})

function readFile (filePath) {
  return new Promise(function (resolve, reject) {
    fs.readFile(path.join(__dirname, '..', filePath), 'utf-8', function (e, res) {
      if (e != null) {
        reject(e)
      } else {
        resolve(res)
      }
    })
  })
}

function getImport (f) {
  return '.' + f.substring(5, f.lastIndexOf('.'))
}
