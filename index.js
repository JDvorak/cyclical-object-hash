const stringify = require('safe-stable-stringify')
const blake2b = require('blake2b')

module.exports = function raw (object) {
  objectHash(object).digest()
}

function objectHash (object) {
  var output = new Uint8Array(64)
  var string = stringify(object)

  return blake2b(output.length).update(Buffer.from(string))
}

module.exports.hex = function (obj) {
  return objectHash(obj).digest('hex')
}
