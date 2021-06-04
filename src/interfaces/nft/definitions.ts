export default {
  types: {
    CID: 'Vec<u8>',
    Properties: {
      _set: {
        Transferable: 0b00000001,
        Burnable: 0b00000010
      }
    },
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
    TokenId: 'u64',
    ClassIdOf: 'ClassId',
    TokenIdOf: 'TokenId',
  }
}
