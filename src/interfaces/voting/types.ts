// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Enum, Struct, U8aFixed, Vec, u64 } from '@polkadot/types';
import type { ITuple } from '@polkadot/types/types';
import type { AccountId } from '@polkadot/types/interfaces/runtime';

/** @name TallyType */
export interface TallyType extends Enum {
  readonly isOnePerson: boolean;
  readonly isOneCoin: boolean;
}

/** @name VoteCommitment */
export interface VoteCommitment extends U8aFixed {}

/** @name VoteData */
export interface VoteData extends Struct {
  readonly initiator: AccountId;
  readonly stage: VoteStage;
  readonly vote_type: VoteType;
  readonly tally_type: TallyType;
  readonly voting_scheme: VotingScheme;
}

/** @name VoteOutcome */
export interface VoteOutcome extends U8aFixed {}

/** @name VoteRecord */
export interface VoteRecord extends Struct {
  readonly id: u64;
  readonly commitments: Vec<ITuple<[AccountId, VoteOutcome]>>;
  readonly reveals: Vec<ITuple<[AccountId, Vec<VoteOutcome>]>>;
  readonly data: VoteData;
  readonly outcomes: Vec<VoteOutcome>;
}

/** @name VoteStage */
export interface VoteStage extends Enum {
  readonly isPreVoting: boolean;
  readonly isCommit: boolean;
  readonly isVoting: boolean;
  readonly isCompleted: boolean;
}

/** @name VoteType */
export interface VoteType extends Enum {
  readonly isBinary: boolean;
  readonly isMultiOption: boolean;
  readonly isRankedChoice: boolean;
}

/** @name VotingScheme */
export interface VotingScheme extends Enum {
  readonly isSimple: boolean;
  readonly isCommitReveal: boolean;
}

export type PHANTOM_VOTING = 'voting';
