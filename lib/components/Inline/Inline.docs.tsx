import React, { ReactNode } from 'react';
import { ComponentDocs } from '../../../site/src/types';
import { Box } from '../Box/Box';
import { Inline, InlineProps } from './Inline';
import { Placeholder } from '../private/Placeholder/Placeholder';
import { padding } from '../Box/useBoxStyles.treat';

const spaces = Object.keys(padding.top).filter(
  space => space !== 'none',
) as Array<InlineProps['space']>;

const Container = ({ children }: { children: ReactNode }) => (
  <Box background="neutralLight" style={{ maxWidth: '240px' }}>
    {children}
  </Box>
);

const docs: ComponentDocs = {
  category: 'Layout',
  screenshotWidths: [320, 768],
  examples: [
    ...spaces.map(space => ({
      label: `Space: ${space}`,
      Container,
      Example: () => (
        <Inline space={space}>
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
        </Inline>
      ),
    })),
    {
      label: "Responsive space, e.g. ['xxsmall', 'medium']",
      Container,
      Example: () => (
        <Inline space={['xxsmall', 'medium']}>
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
        </Inline>
      ),
    },
    {
      label: 'Align to center',
      Container,
      Example: () => (
        <Inline space="small" align="center">
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
        </Inline>
      ),
    },
    {
      label: 'Align to right',
      Container,
      Example: () => (
        <Inline space="small" align="right">
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
        </Inline>
      ),
    },
    {
      label:
        'Responsive alignment (e.g. center on mobile, left from tablet upwards)',
      Container,
      Example: () => (
        <Inline space="small" align={['center', 'left']}>
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
          <Placeholder width={48} height={48} />
        </Inline>
      ),
    },
  ],
};

export default docs;