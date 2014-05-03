#!/usr/bin/env node

var gen = require('../index')
  , name = process.argv[2]

gen(name, function () {
  console.log('created the ' + name + ' component')
})
