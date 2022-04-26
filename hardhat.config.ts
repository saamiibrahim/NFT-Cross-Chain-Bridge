import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-etherscan";
import "hardhat-gas-reporter";
import "solidity-coverage";
import "@openzeppelin/hardhat-upgrades";

import "hardhat-deploy";

import { resolve } from "path";

import { config as dotenvConfig } from "dotenv";
import { HardhatUserConfig } from "hardhat/config";
import { NetworkUserConfig } from "hardhat/types";

dotenvConfig({ path: resolve(__dirname, "./.env") });

const chainIds = {
    goerli: 5,
    hardhat: 1337,
    kovan: 42,
    mainnet: 56,
    rinkeby: 4,
    ropsten: 3,
};

const mnemonic = "";

// Ensure that we have all the environment variables we need.
const privateKey = process.env.PRIVATE_KEY ?? "NO_PRIVATE_KEY";
// Make sure node is setup on Alchemy website
const alchemyApiKey = process.env.ALCHEMY_API_KEY ?? "NO_ALCHEMY_API_KEY";

function getChainConfig(network: keyof typeof chainIds): NetworkUserConfig {
    const url = `https://eth-${network}.alchemyapi.io/v2/${alchemyApiKey}`;
    return {
        accounts: [`${privateKey}`],
        chainId: chainIds[network],
        url,
    };
}

const config: HardhatUserConfig = {
    defaultNetwork: "hardhat",
    gasReporter: {
        currency: "USD",
        enabled: process.env.REPORT_GAS ? true : false,
        excludeContracts: [],
        src: "./contracts",
    },
    networks: {
        hardhat: {
            forking: {
                url: `https://eth-mainnet.alchemyapi.io/v2/${alchemyApiKey}`,
            },
            chainId: chainIds.hardhat,
        },
        rinkeby:{
            url: "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
            chainId: 4,
            gasPrice: 20000000000,
            accounts : {mnemonic:mnemonic}
        },
        fantomTestNet:{
            url: "https://xapi.testnet.fantom.network/lachesis",
            chainId: 4002,
            gasPrice: 20000000000,
            accounts : {mnemonic:mnemonic}
        },
        bscTestNet:{
            url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
            chainId: 97,
            gasPrice: 20000000000,
            accounts : {mnemonic:mnemonic}
        }
        // Uncomment for testing. Commented due to CI issues
        // mainnet: getChainConfig("mainnet"),
        // rinkeby: getChainConfig("rinkeby"),
        // ropsten: getChainConfig("ropsten"),
    },
    paths: {
        artifacts: "./artifacts",
        cache: "./cache",
        sources: "./contracts",
        tests: "./test",
        deploy: "./scripts/deploy",
        deployments: "./deployments",
    },
    solidity: {
        compilers: [
            {
                version: "0.8.9",
                settings: {
                    metadata: {
                        bytecodeHash: "none",
                    },
                    optimizer: {
                        enabled: true,
                        runs: 800,
                    },
                },
            },
            {
                version: "0.8.4",
                settings: {
                    metadata: {
                        bytecodeHash: "none",
                    },
                    optimizer: {
                        enabled: true,
                        runs: 800,
                    },
                },
            },
            {
                version: "0.8.0",
                settings: {
                    metadata: {
                        bytecodeHash: "none",
                    },
                    optimizer: {
                        enabled: true,
                        runs: 800,
                    },
                },
            },
            {
                version: "0.7.5",
                settings: {
                    metadata: {
                        bytecodeHash: "none",
                    },
                    optimizer: {
                        enabled: true,
                        runs: 800,
                    },
                },
            },
            {
                version: "0.5.16",
            },
            {
                version: "0.8.10",
                settings: {
                    metadata: {
                        bytecodeHash: "none",
                    },
                    optimizer: {
                        enabled: true,
                        runs: 800,
                    },
                },
            },
        ],
        settings: {
            outputSelection: {
                "*": {
                    "*": ["storageLayout"],
                },
            },
        },
    },
    namedAccounts: {
        deployer: {
            default: 0,
        },
        daoMultisig: {
            // mainnet
            1: "0x245cc372C84B3645Bf0Ffe6538620B04a217988B",
        },
    },
    // typechain: {
    //     outDir: "types",
    //     target: "ethers-v5",
    // },
    etherscan: {
        apiKey: "2GZFXTGF6YV8747AV8BCURH2ZURZS9WPDS",
    },    
    // bscscan: {
    //     apiKey: "2GZFXTGF6YV8747AV8BCURH2ZURZS9WPDS"
    // },
    mocha: {
        timeout: 1000000,
    },
};

export default config;