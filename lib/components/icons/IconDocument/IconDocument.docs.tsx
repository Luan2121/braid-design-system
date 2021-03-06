import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconDocument } from './IconDocument';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  foundation: true,
  examples: [
    {
      label: 'Default',
      Example: () => <IconDocument />,
    },
  ],
};

export default docs;
