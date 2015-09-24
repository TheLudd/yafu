#!/usr/bin/env node
var sorter = require('./sorter')
var data = ''
process.stdin.on('data', function (d) {
  data += d
})

process.stdin.on('end', function () {
  process.stdout.write(sorter(data))
})
