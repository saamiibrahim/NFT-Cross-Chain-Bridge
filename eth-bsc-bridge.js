
const Web3 = require('web3');
const BridgeEth = require('./artifacts/contracts/BridgeEth.sol/BridgeEth.json');
const BridgeBsc = require('./artifacts/contracts/BridgeFan.sol/BridgeFan.json');

const web3Eth = new Web3('wss://rinkeby.infura.io/ws/v3/b575c6c884114a4ab2e7bedf9c7f0d6d');
const web3Bsc = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545');
const adminPrivKey = '';
const { address: admin } = web3Bsc.eth.accounts.wallet.add(adminPrivKey);

const bridgeEth = new web3Eth.eth.Contract(
  BridgeEth.abi,
  '0xc31c4C811214Da346F14Fd641621630Fe3eE7aCc'
);

const bridgeBsc = new web3Bsc.eth.Contract(
  BridgeBsc.abi,
  '0x27cC4d583Da6B785fD54c42a109e7e0c2F186129'
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
    const { from, to, amount, date, nonce } = event.returnValues;

  const tx = bridgeBsc.methods.mint(to, amount, nonce);
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
    - amount ${amount} tokens
    - date ${date}
  `);
});