// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Enum, bool } from '@polkadot/types';

/** @name ExitReason */
export interface ExitReason extends Enum {
  readonly isExitSucceed: boolean;
  readonly asExitSucceed: bool;
  readonly isExitError: boolean;
  readonly asExitError: bool;
  readonly isExitRevert: boolean;
  readonly asExitRevert: bool;
  readonly isExitFatal: boolean;
  readonly asExitFatal: bool;
}

export type PHANTOM_FRONTIER = 'frontier';
