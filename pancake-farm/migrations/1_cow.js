var CowToken = artifacts.require("CowToken");

module.exports = function(deployer) {
  // deployment steps
  deployer.deploy(CowToken);
};