
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/plH0Q5mkFykW9EK_VVzB158iifWMAG7b',
      accounts: ['1d167b5c8a29faf734230971c5553fa9c7438058ccbd645e280e616ee8eca013']
    }
  }
}