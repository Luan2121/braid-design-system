import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconNotification } from './IconNotification';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  foundation: true,
  examples: [
    {
      label: 'Default',
      Example: () => <IconNotification />,
    },
  ],
};

export default docs;
