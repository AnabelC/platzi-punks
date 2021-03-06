require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

const projectId = process.env.INFURA_PROJECT_ID;
const privateKey = process.env.DEPLOYER_PRIVATE_KEY;

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby:{
      url: `https://rinkeby.infura.io/v3/${projectId}`,
      accounts: [
        privateKey
      ],
    }
  }
};
