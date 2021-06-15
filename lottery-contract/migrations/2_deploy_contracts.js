const Lottery = artifacts.require("Lottery");
const MockBEP20 = artifacts.require("MockBEP20");
const LotteryNFT = artifacts.require("LotteryNFT");
const LotteryUpgradeProxy = artifacts.require("LotteryUpgradeProxy");

const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('https://data-seed-prebsc-1-s1.binance.org:8545'));

module.exports = async function(deployer) {
    await deployer.deploy(LotteryNFT);
    const pharm = await MockBEP20.at('0xf2fe597Ba4Ec1ddfB116df60107247E441D4C699');
    await deployer.deploy(Lottery);

    proxyAdmin= '0xBdE1b3064AF457D63E76F2F5aF6eE0d31eA27829';
    lotteryOwner= '0x111e465f00cA7Ec4585ef57ff475C4b5b8eF9F3B';
    lotteryAdmin= '0x111e465f00cA7Ec4585ef57ff475C4b5b8eF9F3B';

    // Ignore: {IERC20 _pharm,
    // LotteryNFT _lottery,
    // uint256 _minPrice,
    // uint8 _maxNumber,
    // address _owner,
    // address _adminAddress}
    //
    const abiEncodeData = web3.eth.abi.encodeFunctionCall({
        "inputs": [
          {
            "internalType": "contract IERC20",
            "name": "_pharm",
            "type": "address"
          },
          {
            "internalType": "contract LotteryNFT",
            "name": "_lottery",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_minPrice",
            "type": "uint256"
          },
          {
            "internalType": "uint8",
            "name": "_maxNumber",
            "type": "uint8"
          },
          {
            "internalType": "address",
            "name": "_owner",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "_adminAddress",
            "type": "address"
          }
        ],
        "name": "initialize",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }, [pharm.address, LotteryNFT.address, '10000000000000000000', 9, lotteryOwner, lotteryAdmin]);

    await deployer.deploy(LotteryUpgradeProxy, Lottery.address, proxyAdmin, abiEncodeData);

    const lotteryNft = await LotteryNFT.deployed();
    await lotteryNft.transferOwnership(LotteryUpgradeProxy.address);
};



