const fs = require("fs")
const yargs = require("yargs")
const argv = yargs

  .option("target", { type: "string" })
  .option("rename", { type: "boolean", default: false })
  .command("new <name> [template]", "get <source> [proxy]", {}, arg =>
    console.dir(arg)
  )
  .epilogue("for more information, find our manual at http://example.com")
  .fail(function(msg, err, yargs) {
    if (err) throw err // preserve stack
    console.error("You broke it!")
    console.error(msg)
    console.error("You should be doing", yargs.help())
    process.exit(1)
  })
  .command(
    "$0",
    "the default command",
    () => {},
    argv => {
      yargs.showHelp()
    }
  )
  .help("help")
  .alias("help", "h").argv
console.log(argv)
