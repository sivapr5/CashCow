var LotteryRewardPool = artifacts.require("LotteryRewardPool");

module.exports = function(deployer) {
  // deployment steps
  deployer.deploy(LotteryRewardPool, "0xB922d0f38175b5B67167Ca3Bb1B98F6a61cc8877", "0xf2fe597Ba4Ec1ddfB116df60107247E441D4C699", "0x111e465f00cA7Ec4585ef57ff475C4b5b8eF9F3B", "0xBdE1b3064AF457D63E76F2F5aF6eE0d31eA27829");
};