require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
const fs = require('fs');
// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/SdVItf_NwJ7whx4g88ZXLn0O7ew9eqIW",
      accounts: [ "dbd5a099102c8f0fdf582568162aea3aec0e2dc8f2bc6e41ff0209be919ae24f" ]
    }
  },
  solidity: {
    version: "0.8.5",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};