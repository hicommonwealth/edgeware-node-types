export default {
  types: {
    CID: 'Vec<u8>',
    Properties: 'u8',
    ClassData: {
      deposit: 'Balance',
      properties: 'Properties',
    },
    TokenData: {
      deposit: 'Balance',
    },
    ClassInfo: {
      metadata: 'Vec<u8>',
      total_issuance: 'TokenId',
      owner: 'AccountId',
      data: 'ClassData',
    },
    ClassInfoOf: 'ClassInfo',
    TokenInfo: {
      metadata: 'Vec<u8>',
      owner: 'AccountId',
      data: 'TokenData',
    },
    TokenInfoOf: 'TokenInfo',
    ClassId: 'u32',
    TokenId: 'u64',
    ClassIdOf: 'ClassId',
    TokenIdOf: 'TokenId',
  }
}
