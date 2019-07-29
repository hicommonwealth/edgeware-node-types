import { Bytes, Text, u32, Null, u64 } from '@polkadot/types';
import { Option, Struct, EnumType } from '@polkadot/types/codec';
import AccountId from '@polkadot/types/primitive/Generic/AccountId';

export class MetadataRecord extends Struct {
  constructor (value: any) {
    super({
      avatar: Text,
      display_name: Text,
      tagline: Text,
    }, value);
  }
  get avatar (): Text {
    return this.get('avatar') as Text;
  }
  get display_name (): Text {
    return this.get('display_name') as Text;
  }
  get tagline (): Text {
    return this.get('tagline') as Text;
  }
}

export class Registered extends Null { }
export class Attested extends Null { }
export class Verified extends Null { }

export class IdentityStage extends EnumType {
  constructor (value?: string, index?: number) {
    super({
      registered: Registered,
      attested: Attested,
      verified: Verified,
    }, value, index);
  }
}

export class IdentityRecord extends Struct {
  constructor (value: any) {
    super({
      account: AccountId,
      identity_type: Text,
      identity: Bytes,
      stage: IdentityStage,
      expiration_time: u64,
      proof: Option.with(Text),
      metadata: Option.with(MetadataRecord),
    }, value);
  }
  get account (): AccountId {
    return this.get('account') as AccountId;
  }
  get identity (): Bytes {
    return this.get('identity') as Bytes;
  }
  get stage (): IdentityStage {
    return this.get('stage') as IdentityStage;
  }
  get expiration_time(): u64 {
    return this.get('expiration_time') as u64;
  }
  get proof (): Option<Text> {
    return this.get('proof') as Option<Text>;
  }
  get metadata (): Option<MetadataRecord> {
    return this.get('metadata') as Option<MetadataRecord>;
  }
}

// Old types that aren't used anymore (kept for backwards compatability)
const ArchivedTypes = {
  IdentityIndex: u32,
  Claim: Bytes,
};

// Current types
const CurrentTypes = {
  IdentityStage,
  IdentityRecord,
  MetadataRecord,
  IdentityType: Text,
  Attestation: Bytes,
  Identity: Bytes,
};

export const IdentityTypes = { ...ArchivedTypes, ...CurrentTypes };
