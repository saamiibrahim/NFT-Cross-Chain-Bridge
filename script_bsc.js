const {ethers } = require('hardhat');
async function main(){

    let [admin] = await ethers.getSigners();

    const TokenBsc = await ethers.getContractFactory('TokenFan');
    
    const bsc = await TokenBsc.deploy();
    
    
    // await bsc.mint(admin.address);

    const BridgeBscFac = await ethers.getContractFactory('BridgeFan');
    
    const BridgeBsc = await BridgeBscFac.deploy(bsc.address);
    
    await bsc.updateAdmin(BridgeBsc.address);

    console.log('bsc',bsc.address);
    console.log('BridgeBsc',BridgeBsc.address);
}


main();