var PancakeFactory = artifacts.require("PancakeFactory");

module.exports = function(deployer) {
  // deployment steps
  deployer.deploy(PancakeFactory, "0x111e465f00cA7Ec4585ef57ff475C4b5b8eF9F3B");
};