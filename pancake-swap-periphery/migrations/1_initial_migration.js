var PancakeRouter = artifacts.require("PancakeRouter");

module.exports = function(deployer) {
  // deployment steps
  deployer.deploy(PancakeRouter, "0x6725F303b657a9451d8BA641348b6761A6CC7a17", "0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd");
};