// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bytes, Enum, Option, Struct, U256, U64, U8aFixed, Vec, bool, u32, u64 } from '@polkadot/types';
import type { Log } from '@polkadot/types/interfaces/evm';
import type { H160, H256, H512 } from '@polkadot/types/interfaces/runtime';

/** @name Bloom */
export interface Bloom extends U8aFixed {}

/** @name ExitReason */
export interface ExitReason extends Enum {
  readonly isExitSucceed: boolean;
  readonly asExitSucceed: bool;
  readonly isExitError: boolean;
  readonly asExitError: bool;
  readonly isExitRevert: boolean;
  readonly asExitRevert: bool;
  readonly isExitFatal: boolean;
  readonly asExitFatal: bool;
}

/** @name H2048 */
export interface H2048 extends Bloom {}

/** @name Receipt */
export interface Receipt extends Struct {
  readonly transaction_hash: Option<H256>;
  readonly transaction_index: Option<U256>;
  readonly block_hash: Option<H256>;
  readonly from: Option<H160>;
  readonly to: Option<H160>;
  readonly block_number: Option<U256>;
  readonly cumulative_gas_used: U256;
  readonly gas_used: Option<U256>;
  readonly contract_address: Option<H160>;
  readonly logs: Vec<Log>;
  readonly state_root: Option<H256>;
  readonly logs_bloom: H2048;
  readonly status_code: Option<U64>;
}

/** @name Transaction */
export interface Transaction extends Struct {
  readonly block_hash: Option<H256>;
  readonly block_number: Option<U256>;
  readonly chain_id: Option<u64>;
  readonly condition: Option<TransactionCondition>;
  readonly creates: Option<H160>;
  readonly from: H160;
  readonly gas: U256;
  readonly gas_price: U256;
  readonly hash: H256;
  readonly input: Bytes;
  readonly nonce: U256;
  readonly public_key: Option<H512>;
  readonly r: U256;
  readonly raw: Bytes;
  readonly s: U256;
  readonly standard_v: U256;
  readonly to: Option<H160>;
  readonly transaction_index: Option<U256>;
  readonly v: U256;
  readonly value: U256;
}

/** @name TransactionCondition */
export interface TransactionCondition extends Enum {
  readonly isBlock: boolean;
  readonly asBlock: u64;
  readonly isTime: boolean;
  readonly asTime: u64;
}

/** @name TransactionStatus */
export interface TransactionStatus extends Struct {
  readonly transaction_hash: H256;
  readonly transaction_index: u32;
  readonly from: H160;
  readonly to: Option<H160>;
  readonly contract_address: Option<H160>;
  readonly logs: Vec<Log>;
  readonly logs_bloom: Bloom;
}

export type PHANTOM_FRONTIER = 'frontier';
