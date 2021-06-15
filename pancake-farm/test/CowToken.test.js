const { assert } = require("chai");

const CowToken = artifacts.require('CowToken');

contract('CowToken', ([alice, bob, carol, dev, minter]) => {
    beforeEach(async () => {
        this.cow = await CowToken.new({ from: minter });
    });


    it('mint', async () => {
        await this.cow.mint(alice, 1000, { from: minter });
        assert.equal((await this.cow.balanceOf(alice)).toString(), '1000');
    })
});
