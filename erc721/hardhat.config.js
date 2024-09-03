require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.20",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: ["0x0aab5958d36e792f55f4f60eacd662505b660096cd1ea99bf2046a06f272343e"],
    },
  },
};
