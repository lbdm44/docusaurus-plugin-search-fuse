import path from 'path';

import type { LoadContext, Plugin } from '@docusaurus/types';

import type { PluginOptions } from '../../types/docusaurus-plugin-search-fuse';

export function DocusaurusPluginSearchFuse(
  context: LoadContext,
  options: PluginOptions
): Plugin {
  const themePath = path.resolve(__dirname, '../theme');

  return {
    name: 'docusaurus-plugin-search-fuse',

    getThemePath() {
      return themePath;
    },
  };
}
