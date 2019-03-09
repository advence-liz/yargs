
// #!/usr/bin/env node

var argv = require('yargs')
  .completion('completion', function(current, argv) {
    // 'current' is the current command being completed.
    // 'argv' is the parsed arguments so far.
    // simply return an array of completions.
    return [
      'foo',
      'bar'
    ];
  })
  .argv;