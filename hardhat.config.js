require('@nomiclabs/hardhat-waffle');
const dotenv = require("dotenv");
dotenv.config();

// Mi contrato
// 0xe7Cca88a16380f01Fb18440633799cD60752f3bc

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: process.env.API_URL,
      accounts: [process.env.PVT_KEY],
    },
  },
};