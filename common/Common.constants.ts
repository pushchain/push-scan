import { FC } from 'react';
import {
  ArbitrumMonotone,
  BnbMonotone,
  EtheriumMonotone,
  IconProps,
  OptimismMonotone,
  PolygonMonotone,
  PushMonotone,
} from '../blocks/icons';

export const CHAIN_LOGO: {
  [x: number | string]: FC<IconProps>;
} = {
  1: EtheriumMonotone,
  11155111: EtheriumMonotone,
  137: PolygonMonotone,
  80002: PolygonMonotone,
  97: BnbMonotone,
  56: BnbMonotone,
  42161: ArbitrumMonotone,
  421614: ArbitrumMonotone,
  11155420: OptimismMonotone,
  10: OptimismMonotone,
  2442: PolygonMonotone,
  1101: PolygonMonotone,
  '5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp': OptimismMonotone,
  devnet: PushMonotone,
};
