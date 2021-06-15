const MockBEP20 = artifacts.require("MockBEP20");

module.exports = function(deployer) {
  deployer.deploy(MockBEP20, 'Cow', 'COW', '100000000000000000000000');
};
