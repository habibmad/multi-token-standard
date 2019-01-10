/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter } from "ethers";
import { Provider } from "ethers/providers";
import { BigNumber } from "ethers/utils";

export class ERC1155 extends Contract {
  functions: {
    isApprovedForAll(_owner: string, _operator: string): Promise<boolean>;

    balanceOf(_address: string, _id: number | string): Promise<BigNumber>;

    balanceOfBatch(
      _owners: (string)[],
      _ids: (number | string)[]
    ): Promise<(BigNumber)[]>;

    getIDBinIndex(
      _id: number | string
    ): Promise<{
      bin: BigNumber;
      index: BigNumber;
      0: BigNumber;
      1: BigNumber;
    }>;

    getValueInBin(
      _binValue: number | string,
      _index: number | string
    ): Promise<BigNumber>;

    writeValueInBin(
      _binValue: number | string,
      _index: number | string,
      _value: number | string
    ): Promise<BigNumber>;

    supportsInterface(_interfaceID: string): Promise<boolean>;

    safeTransferFrom(
      _from: string,
      _to: string,
      _id: number | string,
      _value: number | string,
      _data: (string)[]
    ): Promise<ContractTransaction>;

    safeBatchTransferFrom(
      _from: string,
      _to: string,
      _ids: (number | string)[],
      _values: (number | string)[],
      _data: (string)[]
    ): Promise<ContractTransaction>;

    setApprovalForAll(
      _operator: string,
      _approved: boolean
    ): Promise<ContractTransaction>;

    ERC1155_BATCH_RECEIVED_VALUE(): Promise<string>;
    ERC1155_RECEIVED_VALUE(): Promise<string>;
  };
  filters: {
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
