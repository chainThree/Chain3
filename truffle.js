module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 7545,
      gas: 6721975,
      network_id: "5777"
    }
  },
  solc: {
     optimizer: {
       enabled: true,
       runs: 200
     }
  }
};
