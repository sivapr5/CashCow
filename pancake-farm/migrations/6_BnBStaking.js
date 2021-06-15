var BnbStaking = artifacts.require("BnbStaking");

module.exports = function(deployer) {
  // deployment steps
  deployer.deploy(BnbStaking, "0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd", "0xf2fe597Ba4Ec1ddfB116df60107247E441D4C699", "500000000000000000", "2602400", "3466400", "0x111e465f00cA7Ec4585ef57ff475C4b5b8eF9F3B", "0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd");
};