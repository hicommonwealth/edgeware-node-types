export default {
  types: {
    ExitReason: {
      _enum: {
        ExitSucceed: 'bool',
        ExitError: 'bool',
        ExitRevert: 'bool',
        ExitFatal: 'bool'
      }
    }
  }
};
