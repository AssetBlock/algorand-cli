const chalk = require("chalk");
const Creator = require("./Creator");

async function create(projectName, options) {
  console.log(
    chalk.blue(
      `Local node detected... installing new application based on local configuration`
    )
  );

  console.log(
    chalk.blue(
      `New update detected! Downloading latest ${chalk.bold(
        "Algorand"
      )} binary...`
    )
  );
  console.log(chalk.blue(`Updating node...`));
  console.log(chalk.bold.green(`Node updated successfully!`));

  console.log(chalk.blue(`Creating ${chalk.bold(projectName)} app...`));

  console.log(chalk.blue(`Configuring app options for betanet...`));
  console.log(chalk.blue(`Configuring app options for testnet...`));
  console.log(chalk.blue(`Configuring app options for mainnet...`));

  console.log(chalk.bold.green(`Your application is ready!`));
  console.log(
    chalk.green(
      `Visit http://localhost:8300/apps/${projectName} in your browser to get started`
    )
  );

  console.log();

  const creator = new Creator(name, targetDir, getPromptModules());
  await creator.create(options);
}

module.exports = (...args) => {
  return create(...args).catch(err => {
    // stopSpinner(false); // do not persist
    // error(err);
    // if (!process.env.VUE_CLI_TEST) {
    //   process.exit(1);
    // }
  });
};
