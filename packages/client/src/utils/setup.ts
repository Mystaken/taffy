/**
 * The purpose of this script is to maintain consistency between the setup of storybook, jest, and next.
 * e.g. Loading fonts
 */

import { loadFontAwesome } from '../themes/fonts';

export const setup = () => {
  loadFontAwesome();
};
