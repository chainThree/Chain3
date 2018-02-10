module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 7545,
      gas: 6721975,
      gasPrice: 20000000000,
      network_id: "5777",
      from: '0x627306090abaB3A6e1400e9345bC60c78a8BEf57'
    }
  },
  solc: {
     optimizer: {
       enabled: true,
       runs: 200
     }
  }
};
