import { AccountId, Null, u32, Text, u64, Bytes, BlockNumber } from '@polkadot/types';
import { EnumType, Struct } from '@polkadot/types/codec';

export class Signaling extends Null { }

export class ProposalCategory extends EnumType<Signaling> {
  constructor (value?: string, index?: number) {
      super({
          signaling: Signaling,
    }, value, index);
  }
}

export class PreVoting extends Null { }
export class Voting extends Null { }
export class Completed extends Null { }

export class ProposalStage extends EnumType<PreVoting | Voting | Completed> {
  constructor (value?: string, index?: number) {
    super({
      prevoting: PreVoting,
      voting: Voting,
      completed: Completed,
    }, value, index);
  }
}

export class ProposalRecord extends Struct {
  constructor (value: any) {
    super({
      index: u32,
      author: AccountId,
      stage: ProposalStage,
      transition_time: BlockNumber,
      category: ProposalCategory,
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
  get stage (): ProposalStage {
    return this.get('stage') as ProposalStage;
  }
  get transition_time (): BlockNumber {
    return this.get('transition_time') as BlockNumber;
  }
  get category () : ProposalCategory {
    return this.get('category') as ProposalCategory;
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

export const GovernanceTypes = {
  Signaling,
  PreVoting,
  Voting,
  Completed,
  ProposalStage,
  ProposalCategory,
  ProposalRecord,
  ProposalContents: Bytes,
  ProposalTitle: Bytes,
};
