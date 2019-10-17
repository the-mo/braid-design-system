import React, { ReactNode } from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Button } from './Button';

const Container = ({ children }: { children: ReactNode }) => (
  <div style={{ maxWidth: '300px' }}>{children}</div>
);

const docs: ComponentDocs = {
  migrationGuide: true,
  examples: [
    {
      label: 'Default Button',
      Container,
      Example: () => <Button>Submit</Button>,
    },
    {
      label: 'Strong Button',
      Container,
      Example: () => <Button weight="strong">Submit</Button>,
    },
    {
      label: 'Weak Button',
      Container,
      Example: () => <Button weight="weak">Submit</Button>,
    },
    {
      label: 'Loading Button',
      Container,
      Example: () => <Button loading>Loading</Button>,
      storybook: false,
    },
  ],
};

export default docs;