const fs = require('fs')
const yargs = require("yargs")
const argv = yargs
  .config({ foo: 1, bar: 2,name:'default' }) 
  .config("config", function(configPath = "config") {
//    console.log(yargs.argv)  执行到这句然后就自然停止了
    return JSON.parse(fs.readFileSync(configPath, "utf-8"))
  }).argv
// yargs.argv   放外面没事什么鬼
console.log(argv)
