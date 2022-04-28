
const Web3 = require('web3');
const BridgeEth = require('./artifacts/contracts/BridgeEth.sol/BridgeEth.json');
const BridgeBsc = require('./artifacts/contracts/BridgeFan.sol/BridgeFan.json');

const web3Eth = new Web3('wss://rinkeby.infura.io/ws/v3/b575c6c884114a4ab2e7bedf9c7f0d6d');
const web3Bsc = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545/');
const adminPrivKey = '';
const { address: admin } = web3Bsc.eth.accounts.wallet.add(adminPrivKey);

const bridgeEth = new web3Eth.eth.Contract(
  BridgeEth.abi,
  '0x4c79942254f4D18D3f5697F007547495c6cB0494'
);

const bridgeBsc = new web3Bsc.eth.Contract(
  BridgeBsc.abi,
  '0x87567474533614C722528b7Df7DC5095475A57B1'
);

// console.log(bridgeEth.event.Transfer());

// var myEvent = bridgeEth.events({},{fromBlock: 0, toBlock: 'latest'});
// bridgeEth.events.Transfer(
//   {fromBlock: 0, step: 0}
// );

bridgeEth.events.Transfer(
  {fromBlock: 0,step: 0}
).on('data', async event => {
    console.log(event);
    const { from, to, tokenId, date, nonce } = event.returnValues;
    
  const tx = bridgeBsc.methods.mint(to, nonce , tokenId);
  const [gasPrice, gasCost] = await Promise.all([
    web3Bsc.eth.getGasPrice(),
    tx.estimateGas({from: admin}),
  ]);
  const data = tx.encodeABI();
  const txData = {
    from: admin,
    to: bridgeBsc.options.address,
    data,
    gas: gasCost,
    gasPrice
  };
  const receipt = await web3Bsc.eth.sendTransaction(txData);
  console.log(`Transaction hash: ${receipt.transactionHash}`);
  console.log(`
    Processed transfer:
    - from ${from} 
    - to ${to} 
    - Token ID ${tokenId}
    - date ${date}
  `);
});