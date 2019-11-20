#!/usr/bin/env node

const chalk = require("chalk");
const program = require("commander");

console.log();
console.log(chalk.bold.magenta(`Welcome to Algorand!`));

program
  .version(`algorand-cli ${require("../package").version}`)
  .usage("<command> [options]");

program
  .command("create <app-name>")
  .description("create a new project powered by algorand")
  .option("-n, --network", "Start app on mainnet, testnet, or betanet")
  .action((name, cmd) => {
    const options = cleanArgs(cmd);
    require("../lib/create")(name, options);
  });

// add some useful info on help
program.on("--help", () => {
  console.log();
  console.log(
    `  Run ${chalk.cyan(
      `vue <command> --help`
    )} for detailed usage of given command.`
  );
  console.log();
});

program.commands.forEach(c => c.on("--help", () => console.log()));

program.parse(process.argv);

// program
//   .command("ui")
//   .description("start and open the vue-cli ui")
//   .option(
//     "-H, --host <host>",
//     "Host used for the UI server (default: localhost)"
//   )
//   .option(
//     "-p, --port <port>",
//     "Port used for the UI server (by default search for available port)"
//   )
//   .option("-D, --dev", "Run in dev mode")
//   .option("--quiet", `Don't output starting messages`)
//   .option("--headless", `Don't open browser on start and output port`)
//   .action(cmd => {
//     checkNodeVersion(">=8.6", "vue ui");
//     require("../lib/ui")(cleanArgs(cmd));
//   });

function camelize(str) {
  return str.replace(/-(\w)/g, (_, c) => (c ? c.toUpperCase() : ""));
}

// commander passes the Command object itself as options,
// extract only actual options into a fresh object.
function cleanArgs(cmd) {
  const args = {};
  cmd.options.forEach(o => {
    const key = camelize(o.long.replace(/^--/, ""));
    // if an option is not present and Command has a method with the same name
    // it should not be copied
    if (typeof cmd[key] !== "function" && typeof cmd[key] !== "undefined") {
      args[key] = cmd[key];
    }
  });
  return args;
}
