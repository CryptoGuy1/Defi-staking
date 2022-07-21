import "hardhat-deploy"
import '@nomiclabs/hardhat-ethers'
import '@typechain/hardhat'
import { HardhatUserConfig } from 'hardhat/config'
import * as dotenv from 'dotenv'
dotenv.config()

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY
const PRIVATE_KEY = process.env.PRIVATE_KEY
const config: HardhatUserConfig = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat:{
      chainId: 31337
    },
    localhost: {
      chainId: 31337
    },
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${PRIVATE_KEY}`]
    }
  },
  solidity: {
    compilers: [{version: "0.8.4"}, {version: "0.8.7"}, {version: "^0.6.0"}],
  },
  namedAccounts: {
    deployer: {
      default: 0,
    }
  }
}
// On Rinkey testnet
// Staking contract : 0xE118636d30Ce6eAA684693065c1F10B1f26fF529
// Reward contract : 0xb0Cc385454eC3DD52EE00353f4E9E37D79CA67E0

export default config;