require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/plH0Q5mkFykW9EK_VVzB158iifWMAG7b',
      accounts: ['56753e46937e9fb6966422f6180b81f8bc9808892b1c62864f91dcfde8a235ab']
    }
  }
};
