import * as dotenv from "dotenv";

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

dotenv.config();

const { PRIVATE_KEY, SCAN_KEY, MUMBAI_RPC_URL, POLYGON_RPC_URL } = process.env;

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.2",
      },
      {
        version: "0.6.6",
        settings: {},
      },
      {
        version: "0.8.7",
        settings: {},
      },
      {
        version: "0.7.0",
        settings: {},
      },
    ],
  },
  networks: {
    hardhat: {
      allowUnlimitedContractSize: true,
    },
    polygon: {
      url: String(POLYGON_RPC_URL),
      accounts: [String(PRIVATE_KEY)],
      allowUnlimitedContractSize: true,
    },
    mumbai: {
      url: String(MUMBAI_RPC_URL),
      accounts: [String(PRIVATE_KEY)],
      allowUnlimitedContractSize: true,
    },
  },
  etherscan: {
    apiKey: String(SCAN_KEY),
  },
  typechain: {
    outDir: "types",
    target: "ethers-v5",
    alwaysGenerateOverloads: true, // should overloads with full signatures like deposit(uint256) be generated always, even if there are no overloads?
  },
};

export default config;
