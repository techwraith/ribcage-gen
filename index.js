var hbsDir = require('hbs-dir')
var change = require('change-case')
var path = require('path')

module.exports = function (target, cb) {
  var opts = {
    origin: path.join(__dirname, './compontent-template/')
  , target: path.join(process.cwd(), target)
  , context: {
      CamelName: change.pascalCase(target)
    , name: target
    }
  }
  hbsDir(opts, cb)
}
