var SyrupBar = artifacts.require("SyrupBar");

module.exports = function(deployer) {
  // deployment steps
  deployer.deploy(SyrupBar, "0xf2fe597Ba4Ec1ddfB116df60107247E441D4C699");
};