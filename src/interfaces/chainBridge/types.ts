// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Enum, Struct, U8aFixed, Vec, u64 } from '@polkadot/types';
import type { AccountId, BlockNumber } from '@polkadot/types/interfaces/runtime';

/** @name DepositNonce */
export interface DepositNonce extends u64 {}

/** @name ProposalStatus */
export interface ProposalStatus extends Enum {
  readonly isInitiated: boolean;
  readonly isApproved: boolean;
  readonly isRejected: boolean;
}

/** @name ProposalVotes */
export interface ProposalVotes extends Struct {
  readonly votes_for: Vec<AccountId>;
  readonly votes_against: Vec<AccountId>;
  readonly staus: ProposalStatus;
  readonly expiry: BlockNumber;
}

/** @name ResourceId */
export interface ResourceId extends U8aFixed {}

export type PHANTOM_CHAINBRIDGE = 'chainBridge';
