const chai = require('chai')
chai.should()

const fs = require('fs')
const testFolder = fs.readdirSync('./test')
const ignoreFiles = [ '__tests-setup.js', 'mocha.opts' ]
const testFiles = testFolder.filter(function (f) {
  return ignoreFiles.indexOf(f) === -1
})

export default function runTests (getTestSubject) {

  return function () {

    testFiles.forEach(function (f) {
      var name = f.split('.')[0]
      var test = require('../test/' + f)
      var fn = getTestSubject(name)
      describe(name, test(fn))
    })

  }

}
