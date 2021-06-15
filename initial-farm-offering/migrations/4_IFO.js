var IFO = artifacts.require("IFO");

module.exports = function(deployer) {
  // deployment steps
  deployer.deploy(IFO, "0x5633bC039257EF4e1B7437ab3c84984ACD20a94C", "0xa8F27D0AA5474698541A759E21eBed119B7571c8", "2401100", "2402320", "100", "100000", "0x111e465f00cA7Ec4585ef57ff475C4b5b8eF9F3B");
};