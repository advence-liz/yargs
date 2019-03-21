const debug = require("debug")("jsr:cli")
const path = require("path")
let config = {}
try {
  config = require(path.resolve("./jsr.config.js"))
} catch (error) {
  debug(error)
}

let templates = [{ name: "nnn", path: "", target: [] }]

module.exports = {
  ...{
    handler,
    queryMap,
    ...config
  }
}
