/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "ERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721__factory>;
    getContractFactory(
      name: "IERC721Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Metadata__factory>;
    getContractFactory(
      name: "IERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721__factory>;
    getContractFactory(
      name: "IERC721Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Receiver__factory>;
    getContractFactory(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "BridgeBase",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BridgeBase__factory>;
    getContractFactory(
      name: "BridgeEth",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BridgeEth__factory>;
    getContractFactory(
      name: "BridgeFan",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BridgeFan__factory>;
    getContractFactory(
      name: "IToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IToken__factory>;
    getContractFactory(
      name: "Migrations",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Migrations__factory>;
    getContractFactory(
      name: "TokenBase",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TokenBase__factory>;
    getContractFactory(
      name: "TokenEth",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TokenEth__factory>;
    getContractFactory(
      name: "TokenFan",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TokenFan__factory>;

    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "ERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721>;
    getContractAt(
      name: "IERC721Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Metadata>;
    getContractAt(
      name: "IERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721>;
    getContractAt(
      name: "IERC721Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Receiver>;
    getContractAt(
      name: "ERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "BridgeBase",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BridgeBase>;
    getContractAt(
      name: "BridgeEth",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BridgeEth>;
    getContractAt(
      name: "BridgeFan",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BridgeFan>;
    getContractAt(
      name: "IToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IToken>;
    getContractAt(
      name: "Migrations",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Migrations>;
    getContractAt(
      name: "TokenBase",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TokenBase>;
    getContractAt(
      name: "TokenEth",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TokenEth>;
    getContractAt(
      name: "TokenFan",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TokenFan>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
