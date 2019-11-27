/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface ERC1155MetaPackedBalanceInterface extends Interface {
  functions: {
    balanceOf: TypedFunctionDescription<{
      encode([_owner, _id]: [string, BigNumberish]): string;
    }>;

    balanceOfBatch: TypedFunctionDescription<{
      encode([_owners, _ids]: [string[], BigNumberish[]]): string;
    }>;

    getIDBinIndex: TypedFunctionDescription<{
      encode([_id]: [BigNumberish]): string;
    }>;

    getValueInBin: TypedFunctionDescription<{
      encode([_binValues, _index]: [BigNumberish, BigNumberish]): string;
    }>;

    isApprovedForAll: TypedFunctionDescription<{
      encode([_owner, _operator]: [string, string]): string;
    }>;

    isValidSignature: TypedFunctionDescription<{
      encode([_signerAddress, _hash, _data, _sig]: [
        string,
        Arrayish,
        Arrayish,
        Arrayish
      ]): string;
    }>;

    safeBatchTransferFrom: TypedFunctionDescription<{
      encode([_from, _to, _ids, _amounts, _data]: [
        string,
        string,
        BigNumberish[],
        BigNumberish[],
        Arrayish
      ]): string;
    }>;

    safeTransferFrom: TypedFunctionDescription<{
      encode([_from, _to, _id, _amount, _data]: [
        string,
        string,
        BigNumberish,
        BigNumberish,
        Arrayish
      ]): string;
    }>;

    setApprovalForAll: TypedFunctionDescription<{
      encode([_operator, _approved]: [string, boolean]): string;
    }>;

    supportsInterface: TypedFunctionDescription<{
      encode([_interfaceID]: [Arrayish]): string;
    }>;

    metaSafeTransferFrom: TypedFunctionDescription<{
      encode([_from, _to, _id, _amount, _isGasFee, _data]: [
        string,
        string,
        BigNumberish,
        BigNumberish,
        boolean,
        Arrayish
      ]): string;
    }>;

    metaSafeBatchTransferFrom: TypedFunctionDescription<{
      encode([_from, _to, _ids, _amounts, _isGasFee, _data]: [
        string,
        string,
        BigNumberish[],
        BigNumberish[],
        boolean,
        Arrayish
      ]): string;
    }>;

    metaSetApprovalForAll: TypedFunctionDescription<{
      encode([_owner, _operator, _approved, _isGasFee, _data]: [
        string,
        string,
        boolean,
        boolean,
        Arrayish
      ]): string;
    }>;

    getNonce: TypedFunctionDescription<{ encode([_signer]: [string]): string }>;
  };

  events: {
    ApprovalForAll: TypedEventDescription<{
      encodeTopics([_owner, _operator, _approved]: [
        string | null,
        string | null,
        null
      ]): string[];
    }>;

    NonceChange: TypedEventDescription<{
      encodeTopics([signer, newNonce]: [string | null, null]): string[];
    }>;

    TransferBatch: TypedEventDescription<{
      encodeTopics([_operator, _from, _to, _ids, _amounts]: [
        string | null,
        string | null,
        string | null,
        null,
        null
      ]): string[];
    }>;

    TransferSingle: TypedEventDescription<{
      encodeTopics([_operator, _from, _to, _id, _amount]: [
        string | null,
        string | null,
        string | null,
        null,
        null
      ]): string[];
    }>;

    URI: TypedEventDescription<{
      encodeTopics([_uri, _id]: [null, BigNumberish | null]): string[];
    }>;
  };
}

export class ERC1155MetaPackedBalance extends Contract {
  connect(
    signerOrProvider: Signer | Provider | string
  ): ERC1155MetaPackedBalance;
  attach(addressOrName: string): ERC1155MetaPackedBalance;
  deployed(): Promise<ERC1155MetaPackedBalance>;

  on(event: EventFilter | string, listener: Listener): ERC1155MetaPackedBalance;
  once(
    event: EventFilter | string,
    listener: Listener
  ): ERC1155MetaPackedBalance;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): ERC1155MetaPackedBalance;
  removeAllListeners(eventName: EventFilter | string): ERC1155MetaPackedBalance;
  removeListener(eventName: any, listener: Listener): ERC1155MetaPackedBalance;

  interface: ERC1155MetaPackedBalanceInterface;

  functions: {
    balanceOf(_owner: string, _id: BigNumberish): Promise<BigNumber>;

    balanceOfBatch(
      _owners: string[],
      _ids: BigNumberish[]
    ): Promise<BigNumber[]>;

    getIDBinIndex(
      _id: BigNumberish
    ): Promise<{
      bin: BigNumber;
      index: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    getValueInBin(
      _binValues: BigNumberish,
      _index: BigNumberish
    ): Promise<BigNumber>;

    isApprovedForAll(_owner: string, _operator: string): Promise<boolean>;

    isValidSignature(
      _signerAddress: string,
      _hash: Arrayish,
      _data: Arrayish,
      _sig: Arrayish
    ): Promise<boolean>;

    safeBatchTransferFrom(
      _from: string,
      _to: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _data: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    safeTransferFrom(
      _from: string,
      _to: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setApprovalForAll(
      _operator: string,
      _approved: boolean,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    supportsInterface(_interfaceID: Arrayish): Promise<boolean>;

    metaSafeTransferFrom(
      _from: string,
      _to: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _isGasFee: boolean,
      _data: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    metaSafeBatchTransferFrom(
      _from: string,
      _to: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _isGasFee: boolean,
      _data: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    metaSetApprovalForAll(
      _owner: string,
      _operator: string,
      _approved: boolean,
      _isGasFee: boolean,
      _data: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    getNonce(_signer: string): Promise<BigNumber>;
  };

  balanceOf(_owner: string, _id: BigNumberish): Promise<BigNumber>;

  balanceOfBatch(_owners: string[], _ids: BigNumberish[]): Promise<BigNumber[]>;

  getIDBinIndex(
    _id: BigNumberish
  ): Promise<{
    bin: BigNumber;
    index: BigNumber;
    0: BigNumber;
    1: BigNumber;
  }>;

  getValueInBin(
    _binValues: BigNumberish,
    _index: BigNumberish
  ): Promise<BigNumber>;

  isApprovedForAll(_owner: string, _operator: string): Promise<boolean>;

  isValidSignature(
    _signerAddress: string,
    _hash: Arrayish,
    _data: Arrayish,
    _sig: Arrayish
  ): Promise<boolean>;

  safeBatchTransferFrom(
    _from: string,
    _to: string,
    _ids: BigNumberish[],
    _amounts: BigNumberish[],
    _data: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  safeTransferFrom(
    _from: string,
    _to: string,
    _id: BigNumberish,
    _amount: BigNumberish,
    _data: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  setApprovalForAll(
    _operator: string,
    _approved: boolean,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  supportsInterface(_interfaceID: Arrayish): Promise<boolean>;

  metaSafeTransferFrom(
    _from: string,
    _to: string,
    _id: BigNumberish,
    _amount: BigNumberish,
    _isGasFee: boolean,
    _data: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  metaSafeBatchTransferFrom(
    _from: string,
    _to: string,
    _ids: BigNumberish[],
    _amounts: BigNumberish[],
    _isGasFee: boolean,
    _data: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  metaSetApprovalForAll(
    _owner: string,
    _operator: string,
    _approved: boolean,
    _isGasFee: boolean,
    _data: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  getNonce(_signer: string): Promise<BigNumber>;

  filters: {
    ApprovalForAll(
      _owner: string | null,
      _operator: string | null,
      _approved: null
    ): EventFilter;

    NonceChange(signer: string | null, newNonce: null): EventFilter;

    TransferBatch(
      _operator: string | null,
      _from: string | null,
      _to: string | null,
      _ids: null,
      _amounts: null
    ): EventFilter;

    TransferSingle(
      _operator: string | null,
      _from: string | null,
      _to: string | null,
      _id: null,
      _amount: null
    ): EventFilter;

    URI(_uri: null, _id: BigNumberish | null): EventFilter;
  };

  estimate: {
    balanceOf(_owner: string, _id: BigNumberish): Promise<BigNumber>;

    balanceOfBatch(_owners: string[], _ids: BigNumberish[]): Promise<BigNumber>;

    getIDBinIndex(_id: BigNumberish): Promise<BigNumber>;

    getValueInBin(
      _binValues: BigNumberish,
      _index: BigNumberish
    ): Promise<BigNumber>;

    isApprovedForAll(_owner: string, _operator: string): Promise<BigNumber>;

    isValidSignature(
      _signerAddress: string,
      _hash: Arrayish,
      _data: Arrayish,
      _sig: Arrayish
    ): Promise<BigNumber>;

    safeBatchTransferFrom(
      _from: string,
      _to: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _data: Arrayish
    ): Promise<BigNumber>;

    safeTransferFrom(
      _from: string,
      _to: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: Arrayish
    ): Promise<BigNumber>;

    setApprovalForAll(
      _operator: string,
      _approved: boolean
    ): Promise<BigNumber>;

    supportsInterface(_interfaceID: Arrayish): Promise<BigNumber>;

    metaSafeTransferFrom(
      _from: string,
      _to: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _isGasFee: boolean,
      _data: Arrayish
    ): Promise<BigNumber>;

    metaSafeBatchTransferFrom(
      _from: string,
      _to: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _isGasFee: boolean,
      _data: Arrayish
    ): Promise<BigNumber>;

    metaSetApprovalForAll(
      _owner: string,
      _operator: string,
      _approved: boolean,
      _isGasFee: boolean,
      _data: Arrayish
    ): Promise<BigNumber>;

    getNonce(_signer: string): Promise<BigNumber>;
  };
}
