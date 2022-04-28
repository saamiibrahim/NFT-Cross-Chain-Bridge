const {ethers } = require('hardhat');
async function main(){


    let [admin] = await ethers.getSigners();


    const TokenEthFac = await ethers.getContractFactory('TokenEth');
    
    const eth = await TokenEthFac.deploy();
    
    
    await eth.mint(admin.address);

    const BridgeEthFac = await ethers.getContractFactory('BridgeEth');
    
    const BridgeEth = await BridgeEthFac.deploy(eth.address);
    

    console.log('eth',eth.address);
    console.log('BridgeEth',BridgeEth.address);
}

async function updateandMint(){
    const TokenEthFac = await ethers.getContractFactory('TokenEth');
    const eth = await TokenEthFac.attach('0x501E6884F207001043f28263495B8048CEf2DeBa');

    // const BridgeEthFac = await ethers.getContractFactory('BridgeEth');

    
    // const BridgeEth = await BridgeEthFac.attach('0x4c79942254f4D18D3f5697F007547495c6cB0494');

    let [admin] = await ethers.getSigners();


    await eth.mint(admin.address);

    // await eth.updateAdmin(BridgeEth.address);
    // await BridgeEth.mint("0x1158dCd73e0203096C353f352d7f35f1750B34Df",0,1);
    // await BridgeEth.burn('0x1158dCd73e0203096C353f352d7f35f1750B34Df',0);

   
}


async function updateAndBurn(){
    // const TokenEthFac = await ethers.getContractFactory('TokenEth');
    // const eth = await TokenEthFac.attach('0x501E6884F207001043f28263495B8048CEf2DeBa');

    const BridgeEthFac = await ethers.getContractFactory('BridgeEth');
    const BridgeEth = await BridgeEthFac.attach('0x4c79942254f4D18D3f5697F007547495c6cB0494');

    // await eth.updateAdmin(BridgeEth.address);

    await BridgeEth.burn('0x1158dCd73e0203096C353f352d7f35f1750B34Df',2);

   
}



// buns();
updateAndBurn();
// updateandMint();
// main();