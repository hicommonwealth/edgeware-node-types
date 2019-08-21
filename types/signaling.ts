import { AccountId, Null, u32, Text, u64, Bytes, BlockNumber } from '@polkadot/types';
import { EnumType, Struct } from '@polkadot/types/codec';
import { VotingTypes, VoteStage } from './voting';

export class ProposalRecord extends Struct {
  constructor (value: any) {
    super({
      index: u32,
      author: AccountId,
      stage: VoteStage,
      transition_time: BlockNumber,
      title: Text,
      contents: Text,
      vote_id: u64,
    }, value);
  }
  get index (): u32 {
    return this.get('index') as u32;
  }
  get author (): AccountId {
    return this.get('author') as AccountId;
  }
  get stage (): VoteStage {
    return this.get('stage') as VoteStage;
  }
  get transition_time (): BlockNumber {
    return this.get('transition_time') as BlockNumber;
  }
  get title () : Text {
    return this.get('title') as Text;
  }
  get contents () : Text {
    return this.get('contents') as Text;
  }
  get vote_id () : u64 {
    return this.get('vote_id') as u64;
  }
}

export const SignalingTypes = {
  PreVoting: VotingTypes.PreVoting,
  Voting: VotingTypes.Voting,
  Completed: VotingTypes.Completed,
  Commit: VotingTypes.Commit,
  VoteStage,
  ProposalRecord,
  ProposalContents: Bytes,
  ProposalTitle: Bytes,
};
