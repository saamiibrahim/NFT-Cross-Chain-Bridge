/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BridgeEth, BridgeEthInterface } from "../BridgeEth";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "date",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "enum BridgeBase.Step",
        name: "step",
        type: "uint8",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "admin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "otherChainNonce",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "nonce",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "processedNonces",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract IToken",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161042a38038061042a83398101604081905261002f91610062565b600080546001600160a01b03199081163317909155600180546001600160a01b0390931692909116919091179055610092565b60006020828403121561007457600080fd5b81516001600160a01b038116811461008b57600080fd5b9392505050565b610389806100a16000396000f3fe608060405234801561001057600080fd5b50600436106100725760003560e01c8063affed0e011610050578063affed0e0146100d7578063f851a440146100ee578063fc0c546a1461011957600080fd5b806340c10f191461007757806391dae5191461008c5780639dc29fac146100c4575b600080fd5b61008a61008536600461032b565b61012c565b005b6100af61009a366004610363565b60036020526000908152604090205460ff1681565b60405190151581526020015b60405180910390f35b61008a6100d236600461032b565b610268565b6100e060025481565b6040519081526020016100bb565b600054610101906001600160a01b031681565b6040516001600160a01b0390911681526020016100bb565b600154610101906001600160a01b031681565b6000546001600160a01b0316331461018b5760405162461bcd60e51b815260206004820152600a60248201527f6f6e6c792061646d696e0000000000000000000000000000000000000000000060448201526064015b60405180910390fd5b60008181526003602052604090205460ff16156101ea5760405162461bcd60e51b815260206004820152601a60248201527f7472616e7366657220616c72656164792070726f6365737365640000000000006044820152606401610182565b60008181526003602052604090819020805460ff191660019081179091555490516335313c2160e11b81526001600160a01b03848116600483015290911690636a62784290602401600060405180830381600087803b15801561024c57600080fd5b505af1158015610260573d6000803e3d6000fd5b505050505050565b600154604051630852cd8d60e31b8152600481018390526001600160a01b03909116906342966c6890602401600060405180830381600087803b1580156102ae57600080fd5b505af11580156102c2573d6000803e3d6000fd5b50600092506102cf915050565b600254604080513381526001600160a01b03861660208201528082018590524260608201526080810192909252517f27757542a5e1b9e8cef80f584e094d4eb63b9802f355c61b3640b71b618d5c8e9181900360a00190a25050565b6000806040838503121561033e57600080fd5b82356001600160a01b038116811461035557600080fd5b946020939093013593505050565b60006020828403121561037557600080fd5b503591905056fea164736f6c634300080a000a";

export class BridgeEth__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BridgeEth> {
    return super.deploy(token, overrides || {}) as Promise<BridgeEth>;
  }
  getDeployTransaction(
    token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(token, overrides || {});
  }
  attach(address: string): BridgeEth {
    return super.attach(address) as BridgeEth;
  }
  connect(signer: Signer): BridgeEth__factory {
    return super.connect(signer) as BridgeEth__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BridgeEthInterface {
    return new utils.Interface(_abi) as BridgeEthInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BridgeEth {
    return new Contract(address, _abi, signerOrProvider) as BridgeEth;
  }
}
