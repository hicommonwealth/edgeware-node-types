// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Struct, Vec } from '@polkadot/types';
import type { EthReceipt, EthTransactionStatus } from '@polkadot/types/interfaces/eth';
import type { Block } from '@polkadot/types/interfaces/runtime';

/** @name ETHBlock */
export interface ETHBlock extends Struct {
  readonly inner: Block;
}

/** @name ETHReceipts */
export interface ETHReceipts extends Struct {
  readonly inner: Vec<EthReceipt>;
}

/** @name ETHTxStatuses */
export interface ETHTxStatuses extends Struct {
  readonly inner: Vec<EthTransactionStatus>;
}

export type PHANTOM_FRONTIER = 'frontier';
