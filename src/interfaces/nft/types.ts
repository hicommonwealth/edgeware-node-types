// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Bytes, Set, Struct, u64 } from '@polkadot/types';
import type { AccountId, Balance } from '@polkadot/types/interfaces/runtime';
import type { ClassId } from '@polkadot/types/interfaces/uniques';

/** @name CID */
export interface CID extends Bytes {}

/** @name ClassData */
export interface ClassData extends Struct {
  readonly deposit: Balance;
  readonly properties: Properties;
}

/** @name ClassIdOf */
export interface ClassIdOf extends ClassId {}

/** @name ClassInfo */
export interface ClassInfo extends Struct {
  readonly metadata: Bytes;
  readonly total_issuance: TokenId;
  readonly owner: AccountId;
  readonly data: ClassData;
}

/** @name ClassInfoOf */
export interface ClassInfoOf extends ClassInfo {}

/** @name Properties */
export interface Properties extends Set {
  readonly isTransferable: boolean;
  readonly isBurnable: boolean;
}

/** @name TokenData */
export interface TokenData extends Struct {
  readonly deposit: Balance;
}

/** @name TokenId */
export interface TokenId extends u64 {}

/** @name TokenIdOf */
export interface TokenIdOf extends TokenId {}

/** @name TokenInfo */
export interface TokenInfo extends Struct {
  readonly metadata: Bytes;
  readonly owner: AccountId;
  readonly data: TokenData;
}

/** @name TokenInfoOf */
export interface TokenInfoOf extends TokenInfo {}

export type PHANTOM_NFT = 'nft';
