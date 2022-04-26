/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC721, ERC721Interface } from "../ERC721";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
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
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
        name: "from",
        type: "address",
      },
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
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
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
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
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
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620015f8380380620015f88339810160408190526200003491620001db565b81516200004990600090602085019062000068565b5080516200005f90600190602084019062000068565b50505062000282565b828054620000769062000245565b90600052602060002090601f0160209004810192826200009a5760008555620000e5565b82601f10620000b557805160ff1916838001178555620000e5565b82800160010185558215620000e5579182015b82811115620000e5578251825591602001919060010190620000c8565b50620000f3929150620000f7565b5090565b5b80821115620000f35760008155600101620000f8565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200013657600080fd5b81516001600160401b03808211156200015357620001536200010e565b604051601f8301601f19908116603f011681019082821181831017156200017e576200017e6200010e565b816040528381526020925086838588010111156200019b57600080fd5b600091505b83821015620001bf5785820183015181830184015290820190620001a0565b83821115620001d15760008385830101525b9695505050505050565b60008060408385031215620001ef57600080fd5b82516001600160401b03808211156200020757600080fd5b620002158683870162000124565b935060208501519150808211156200022c57600080fd5b506200023b8582860162000124565b9150509250929050565b600181811c908216806200025a57607f821691505b602082108114156200027c57634e487b7160e01b600052602260045260246000fd5b50919050565b61136680620002926000396000f3fe608060405234801561001057600080fd5b50600436106100df5760003560e01c80636352211e1161008c578063a22cb46511610066578063a22cb465146101c3578063b88d4fde146101d6578063c87b56dd146101e9578063e985e9c5146101fc57600080fd5b80636352211e1461018757806370a082311461019a57806395d89b41146101bb57600080fd5b8063095ea7b3116100bd578063095ea7b31461014c57806323b872dd1461016157806342842e0e1461017457600080fd5b806301ffc9a7146100e457806306fdde031461010c578063081812fc14610121575b600080fd5b6100f76100f2366004610f43565b610238565b60405190151581526020015b60405180910390f35b61011461028a565b6040516101039190610fb8565b61013461012f366004610fcb565b61031c565b6040516001600160a01b039091168152602001610103565b61015f61015a366004611000565b6103b6565b005b61015f61016f36600461102a565b6104cc565b61015f61018236600461102a565b610553565b610134610195366004610fcb565b61056e565b6101ad6101a8366004611066565b6105f9565b604051908152602001610103565b610114610693565b61015f6101d1366004611081565b6106a2565b61015f6101e43660046110d3565b6106b1565b6101146101f7366004610fcb565b61073f565b6100f761020a3660046111af565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b60006001600160e01b031982166380ac58cd60e01b148061026957506001600160e01b03198216635b5e139f60e01b145b8061028457506301ffc9a760e01b6001600160e01b03198316145b92915050565b606060008054610299906111e2565b80601f01602080910402602001604051908101604052809291908181526020018280546102c5906111e2565b80156103125780601f106102e757610100808354040283529160200191610312565b820191906000526020600020905b8154815290600101906020018083116102f557829003601f168201915b5050505050905090565b6000818152600260205260408120546001600160a01b031661039a5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b60006103c18261056e565b9050806001600160a01b0316836001600160a01b0316141561042f5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b6064820152608401610391565b336001600160a01b038216148061044b575061044b813361020a565b6104bd5760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c00000000000000006064820152608401610391565b6104c78383610835565b505050565b6104d633826108b0565b6105485760405162461bcd60e51b815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f7665640000000000000000000000000000006064820152608401610391565b6104c78383836109a7565b6104c7838383604051806020016040528060008152506106b1565b6000818152600260205260408120546001600160a01b0316806102845760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201527f656e7420746f6b656e00000000000000000000000000000000000000000000006064820152608401610391565b60006001600160a01b0382166106775760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a6560448201527f726f2061646472657373000000000000000000000000000000000000000000006064820152608401610391565b506001600160a01b031660009081526003602052604090205490565b606060018054610299906111e2565b6106ad338383610b68565b5050565b6106bb33836108b0565b61072d5760405162461bcd60e51b815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f7665640000000000000000000000000000006064820152608401610391565b61073984848484610c37565b50505050565b6000818152600260205260409020546060906001600160a01b03166107cc5760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201527f6e6578697374656e7420746f6b656e00000000000000000000000000000000006064820152608401610391565b60006107e360408051602081019091526000815290565b90506000815111610803576040518060200160405280600081525061082e565b8061080d84610cc0565b60405160200161081e92919061121d565b6040516020818303038152906040525b9392505050565b6000818152600460205260409020805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b03841690811790915581906108778261056e565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000818152600260205260408120546001600160a01b03166109295760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b6064820152608401610391565b60006109348361056e565b9050806001600160a01b0316846001600160a01b0316148061096f5750836001600160a01b03166109648461031c565b6001600160a01b0316145b8061099f57506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b949350505050565b826001600160a01b03166109ba8261056e565b6001600160a01b031614610a365760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201527f6f776e65720000000000000000000000000000000000000000000000000000006064820152608401610391565b6001600160a01b038216610a985760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610391565b610aa3600082610835565b6001600160a01b0383166000908152600360205260408120805460019290610acc908490611262565b90915550506001600160a01b0382166000908152600360205260408120805460019290610afa908490611279565b9091555050600081815260026020526040808220805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b816001600160a01b0316836001600160a01b03161415610bca5760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610391565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b610c428484846109a7565b610c4e84848484610dd6565b6107395760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e74657200000000000000000000000000006064820152608401610391565b606081610ce45750506040805180820190915260018152600360fc1b602082015290565b8160005b8115610d0e5780610cf881611291565b9150610d079050600a836112c2565b9150610ce8565b60008167ffffffffffffffff811115610d2957610d296110bd565b6040519080825280601f01601f191660200182016040528015610d53576020820181803683370190505b5090505b841561099f57610d68600183611262565b9150610d75600a866112d6565b610d80906030611279565b60f81b818381518110610d9557610d956112ea565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350610dcf600a866112c2565b9450610d57565b60006001600160a01b0384163b15610f1f57604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290610e1a903390899088908890600401611300565b6020604051808303816000875af1925050508015610e55575060408051601f3d908101601f19168201909252610e529181019061133c565b60015b610f05573d808015610e83576040519150601f19603f3d011682016040523d82523d6000602084013e610e88565b606091505b508051610efd5760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e74657200000000000000000000000000006064820152608401610391565b805181602001fd5b6001600160e01b031916630a85bd0160e11b14905061099f565b506001949350505050565b6001600160e01b031981168114610f4057600080fd5b50565b600060208284031215610f5557600080fd5b813561082e81610f2a565b60005b83811015610f7b578181015183820152602001610f63565b838111156107395750506000910152565b60008151808452610fa4816020860160208601610f60565b601f01601f19169290920160200192915050565b60208152600061082e6020830184610f8c565b600060208284031215610fdd57600080fd5b5035919050565b80356001600160a01b0381168114610ffb57600080fd5b919050565b6000806040838503121561101357600080fd5b61101c83610fe4565b946020939093013593505050565b60008060006060848603121561103f57600080fd5b61104884610fe4565b925061105660208501610fe4565b9150604084013590509250925092565b60006020828403121561107857600080fd5b61082e82610fe4565b6000806040838503121561109457600080fd5b61109d83610fe4565b9150602083013580151581146110b257600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600080600080608085870312156110e957600080fd5b6110f285610fe4565b935061110060208601610fe4565b925060408501359150606085013567ffffffffffffffff8082111561112457600080fd5b818701915087601f83011261113857600080fd5b81358181111561114a5761114a6110bd565b604051601f8201601f19908116603f01168101908382118183101715611172576111726110bd565b816040528281528a602084870101111561118b57600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b600080604083850312156111c257600080fd5b6111cb83610fe4565b91506111d960208401610fe4565b90509250929050565b600181811c908216806111f657607f821691505b6020821081141561121757634e487b7160e01b600052602260045260246000fd5b50919050565b6000835161122f818460208801610f60565b835190830190611243818360208801610f60565b01949350505050565b634e487b7160e01b600052601160045260246000fd5b6000828210156112745761127461124c565b500390565b6000821982111561128c5761128c61124c565b500190565b60006000198214156112a5576112a561124c565b5060010190565b634e487b7160e01b600052601260045260246000fd5b6000826112d1576112d16112ac565b500490565b6000826112e5576112e56112ac565b500690565b634e487b7160e01b600052603260045260246000fd5b60006001600160a01b038087168352808616602084015250836040830152608060608301526113326080830184610f8c565b9695505050505050565b60006020828403121561134e57600080fd5b815161082e81610f2a56fea164736f6c634300080a000a";

export class ERC721__factory extends ContractFactory {
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
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC721> {
    return super.deploy(name_, symbol_, overrides || {}) as Promise<ERC721>;
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  attach(address: string): ERC721 {
    return super.attach(address) as ERC721;
  }
  connect(signer: Signer): ERC721__factory {
    return super.connect(signer) as ERC721__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721Interface {
    return new utils.Interface(_abi) as ERC721Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC721 {
    return new Contract(address, _abi, signerOrProvider) as ERC721;
  }
}
