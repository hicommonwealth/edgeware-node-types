import { IdentityTypes } from './identity';
import { SignalingTypes } from './signaling';
import { TreasuryRewardTypes } from './treasuryReward';
import { VotingTypes } from './voting';

export const EdgewareTypes = {
  PreVoting: VotingTypes.PreVoting,
  Voting: VotingTypes.Voting,
  Completed: VotingTypes.Completed,
  Commit: VotingTypes.Commit,
  VoteStage,
  ProposalRecord,
  ProposalContents: Bytes,
  ProposalTitle: Bytes,
};
