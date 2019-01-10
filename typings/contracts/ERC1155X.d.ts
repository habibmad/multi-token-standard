/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter } from "ethers";
import { Provider } from "ethers/providers";
import { BigNumber } from "ethers/utils";

export class ERC1155X extends Contract {
  functions: {
    balanceOf(_address: string, _id: number | string): Promise<BigNumber>;

    supportsInterface(_interfaceID: string): Promise<boolean>;

    balanceOfBatch(
      _owners: (string)[],
      _ids: (number | string)[]
    ): Promise<(BigNumber)[]>;

    writeValueInBin(
      _binValue: number | string,
      _index: number | string,
      _value: number | string
    ): Promise<BigNumber>;

    getIDBinIndex(
      _id: number | string
    ): Promise<{
      bin: BigNumber;
      index: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    isApprovedForAll(_owner: string, _operator: string): Promise<boolean>;

    getValueInBin(
      _binValue: number | string,
      _index: number | string
    ): Promise<BigNumber>;

    recoverTransferFromSigner(
      _from: string,
      _to: string,
      _id: number | string,
      _value: number | string,
      _data: (string)[],
      _nonce: number | string,
      _sig: { v: number | string; r: string; s: string; sigPrefix: string }
    ): Promise<string>;

    recoverApprovalSigner(
      _operator: string,
      _approved: boolean,
      _nonce: number | string,
      _sig: { v: number | string; r: string; s: string; sigPrefix: string }
    ): Promise<string>;

    recoverHashSigner(
      _hash: string,
      _r: string,
      _s: string,
      _v: number | string
    ): Promise<string>;

    getNonce(_signer: string): Promise<BigNumber>;

    safeBatchTransferFrom(
      _from: string,
      _to: string,
      _ids: (number | string)[],
      _values: (number | string)[],
      _data: (string)[]
    ): Promise<ContractTransaction>;

    renounceOwnership(): Promise<ContractTransaction>;

    setApprovalForAll(
      _operator: string,
      _approved: boolean
    ): Promise<ContractTransaction>;

    safeTransferFrom(
      _from: string,
      _to: string,
      _id: number | string,
      _value: number | string,
      _data: (string)[]
    ): Promise<ContractTransaction>;

    transferOwnership(newOwner: string): Promise<ContractTransaction>;

    sigSafeTransferFrom(
      _from: string,
      _to: string,
      _id: number | string,
      _value: number | string,
      _data: (string)[],
      _sig: { v: number | string; r: string; s: string; sigPrefix: string }
    ): Promise<ContractTransaction>;

    sigSetApprovalForAll(
      _owner: string,
      _operator: string,
      _approved: boolean,
      _sig: { v: number | string; r: string; s: string; sigPrefix: string }
    ): Promise<ContractTransaction>;

    mint(
      _to: string,
      _id: number | string,
      _value: number | string
    ): Promise<ContractTransaction>;

    batchMint(
      _to: string,
      _ids: (number | string)[],
      _values: (number | string)[]
    ): Promise<ContractTransaction>;

    ERC1155_BATCH_RECEIVED_VALUE(): Promise<string>;
    ERC1155_RECEIVED_VALUE(): Promise<string>;
    owner(): Promise<string>;
    isOwner(): Promise<boolean>;
  };
  filters: {
    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;

    TransferSingle(
      _operator: string | null,
      _from: string | null,
      _to: string | null,
      _id: null,
      _value: null
    ): EventFilter;

    TransferBatch(
      _operator: string | null,
      _from: string | null,
      _to: string | null,
      _ids: null,
      _values: null
    ): EventFilter;

    ApprovalForAll(
      _owner: string | null,
      _operator: string | null,
      _approved: null
    ): EventFilter;
  };
}
