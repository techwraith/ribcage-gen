var hbsDir = require('hbs-dir')
var change = require('change-case')
var path = require('path')

module.exports = function (target, cb) {
  var opts = {
    origin: path.join(__dirname, './component-template/')
  , target: path.join(process.cwd(), target)
  , context: {
      PascalName: change.pascalCase(target)
    , camelName: change.camelCase(target)
    , name: target
    }
  }
  hbsDir(opts, cb)
}
