import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
const { vars } = require('hardhat/config');
const SEPOLIA_API_KEY = vars.get('SEPOLIA_API_KEY');
const POLYGONSCAN_API_KEY = vars.get('POLYGONSCAN_API_KEY');
const SEPOLIA_PRIVATE_KEY = vars.get('SEPOLIA_PRIVATE_KEY');
const POLYGONSCAN_PRIVATE_KEY = vars.get('POLYGONSCAN_PRIVATE_KEY');
const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.20",
      },
      {
        version: "0.8.24",
      },
      {
        version: "0.5.16",
      },
      {
        version: "0.8.21",
        settings: {},
      },
    ],
  },

  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${SEPOLIA_API_KEY}`,
      accounts: [`0x${SEPOLIA_PRIVATE_KEY}`],
    }
  },
  etherscan: {
    apiKey: 'enter you api key here',
  },
};

export default config;