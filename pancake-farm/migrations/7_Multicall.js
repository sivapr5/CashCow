var Multicall = artifacts.require("Multicall");

module.exports = function(deployer) {
  // deployment steps
  deployer.deploy(Multicall);
};