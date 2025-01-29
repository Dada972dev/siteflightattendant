import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: '🏛️ Welcome
        '🏛️intro/intro',
        '🏛️intro/what',
        '🏛️intro/who',
      ],
    },
    {
      type: 'category',
      label: '🎓',
      items: [
        '💻developpement/💻developpement',
      ],
    },
  ],
};

export default sidebars;
