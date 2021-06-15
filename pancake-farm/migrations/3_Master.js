var MasterChef = artifacts.require("MasterChef");

module.exports = function(deployer) {
  // deployment steps
  deployer.deploy(MasterChef, "0xf2fe597Ba4Ec1ddfB116df60107247E441D4C699", "0x03F6FE1500959900461369EC43e0Fe78df6252dF", "0xBdE1b3064AF457D63E76F2F5aF6eE0d31eA27829", "1000000000000000000", "703820");
};