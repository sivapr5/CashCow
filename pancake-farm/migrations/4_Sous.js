var SousChef = artifacts.require("SousChef");

module.exports = function(deployer) {
  // deployment steps
  deployer.deploy(SousChef, "0x03F6FE1500959900461369EC43e0Fe78df6252dF", "1000000000000000000", "703820", "710000");
};