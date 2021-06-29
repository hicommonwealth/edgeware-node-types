// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bytes, Enum, Option, Struct, U8aFixed, Vec, bool, i128, u32, u64, u8 } from '@polkadot/types';
import type { AccountId, Balance, BlockNumber } from '@polkadot/types/interfaces/runtime';

/** @name Amount */
export interface Amount extends i128 {}

/** @name AmountOf */
export interface AmountOf extends Amount {}

/** @name Approval */
export interface Approval extends Struct {
  readonly amount: Balance;
  readonly deposit: Balance;
}

/** @name ApprovalKey */
export interface ApprovalKey extends Struct {
  readonly owner: AccountId;
  readonly delegate: AccountId;
}

/** @name Commitment */
export interface Commitment extends ScalarData {}

/** @name CurrencyId */
export interface CurrencyId extends u64 {}

/** @name CurrencyIdOf */
export interface CurrencyIdOf extends CurrencyId {}

/** @name DustHandlerType */
export interface DustHandlerType extends Enum {
  readonly isBurn: boolean;
  readonly isTransfer: boolean;
  readonly asTransfer: AccountId;
}

/** @name HashFunction */
export interface HashFunction extends Enum {
  readonly isPoseidonDefault: boolean;
  readonly isPoseidonExp3: boolean;
  readonly isPoseidonExp5: boolean;
  readonly isPoseidonExp17: boolean;
  readonly isMiMc: boolean;
  readonly isBlake2: boolean;
  readonly isSha256: boolean;
}

/** @name Manager */
export interface Manager extends Struct {
  readonly accountId: AccountId;
  readonly required: bool;
}

/** @name MerkleTree */
export interface MerkleTree extends Struct {
  readonly leaf_count: u32;
  readonly max_leaves: u32;
  readonly depth: u8;
  readonly root_hash: ScalarData;
  readonly edge_nodes: Vec<ScalarData>;
  readonly hasher: HashFunction;
  readonly should_store_leaves: bool;
}

/** @name MixerInfo */
export interface MixerInfo extends Struct {
  readonly minimum_deposit_length_for_reward: BlockNumber;
  readonly fixed_deposit_size: Balance;
  readonly currency_id: CurrencyIdOf;
}

/** @name Nullifier */
export interface Nullifier extends ScalarData {}

/** @name ScalarData */
export interface ScalarData extends U8aFixed {}

/** @name TokenDetails */
export interface TokenDetails extends Struct {
  readonly owner: AccountId;
  readonly issuer: AccountId;
  readonly admin: AccountId;
  readonly freezer: AccountId;
  readonly supply: Balance;
  readonly deposit: Balance;
  readonly min_balance: Balance;
  readonly approvals: u32;
  readonly is_frozen: bool;
  readonly dust_type: DustHandlerType;
}

/** @name TokenMetadata */
export interface TokenMetadata extends Struct {
  readonly deposit: Balance;
  readonly name: Bytes;
  readonly symbol: Bytes;
  readonly decimals: u8;
  readonly is_frozen: bool;
}

/** @name TreeId */
export interface TreeId extends u32 {}

/** @name WithdrawProof */
export interface WithdrawProof extends Struct {
  readonly mixer_id: TreeId;
  readonly cached_block: BlockNumber;
  readonly cached_root: ScalarData;
  readonly comms: Vec<Commitment>;
  readonly nullifier_hash: ScalarData;
  readonly proof_bytes: Bytes;
  readonly leaf_index_commitments: Vec<Commitment>;
  readonly proof_commitments: Vec<Commitment>;
  readonly recipient: Option<AccountId>;
  readonly relayer: Option<AccountId>;
}

export type PHANTOM_WEBB = 'webb';
