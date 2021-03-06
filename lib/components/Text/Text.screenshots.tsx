import React, { Fragment, ReactNode } from 'react';
import { titleCase } from 'change-case';
import { ComponentScreenshot } from '../../../site/src/types';
import { Box, Text, Stack, Column, Columns, IconPositive } from '../';
import {
  background as boxBackgrounds,
  textAlign,
} from '../Box/useBoxStyles.treat';
import { text as textSizes } from '../../hooks/typography/typography.treat';

const Container = ({ children }: { children: ReactNode }) => (
  <div style={{ maxWidth: '300px' }}>{children}</div>
);

export const screenshots: ComponentScreenshot = {
  screenshotWidths: [320, 768],
  examples: [
    { label: 'Standard Text', Example: () => <Text>Standard text.</Text> },
    {
      label: 'Small Text',
      Example: () => <Text size="small">Small text.</Text>,
    },
    {
      label: 'Large Text',
      Example: () => <Text size="large">Large text.</Text>,
    },
    {
      label: 'Truncating long text',
      Example: () => (
        <Box style={{ width: 90 }}>
          <Text truncate>Long piece of text</Text>
        </Box>
      ),
    },
    {
      label: 'Text on Brand Background',
      background: 'brand',
      Container,
      Example: () => (
        <Stack space="small">
          <Text>Neutral text</Text>
          <Text tone="secondary">Secondary text</Text>
        </Stack>
      ),
    },
    {
      label: 'Text Alignment',
      Container,
      Example: () => {
        const alignments = Object.keys(textAlign) as Array<
          keyof typeof textAlign
        >;

        return (
          <Stack space="medium">
            {alignments.map((alignment) => (
              <Text align={alignment} key={alignment}>
                {titleCase(alignment)}
              </Text>
            ))}
          </Stack>
        );
      },
    },
    {
      label: 'Text Alignment (responsive)',
      Container,
      Example: () => (
        <Text align={['right', 'center', 'left']}>
          Right aligned mobile, center on tablet, left on desktop
        </Text>
      ),
    },
    {
      label: 'Text Spacing',
      background: 'card',
      Container,
      Example: () => {
        const sizes = Object.keys(textSizes) as Array<keyof typeof textSizes>;

        return (
          <Stack space="medium">
            {sizes.sort().map((size) => (
              <Box key={size} background="neutralLight">
                <Text size={size}>
                  {titleCase(size)} Text (Line 1)
                  <br />
                  {titleCase(size)} Text (Line 2)
                </Text>
              </Box>
            ))}
          </Stack>
        );
      },
    },
    {
      label: 'Text Contrast',
      Container,
      Example: () => {
        const backgrounds = Object.keys(boxBackgrounds) as Array<
          keyof typeof boxBackgrounds
        >;

        return (
          <Fragment>
            {backgrounds.sort().map((background) => (
              <Box key={background} background={background} padding="xsmall">
                <Columns space="medium">
                  <Column>
                    <Text size="small">
                      {background} <IconPositive />
                    </Text>
                  </Column>
                  <Column width="content">
                    <Text size="small" tone="secondary">
                      Secondary <IconPositive />
                    </Text>
                  </Column>
                </Columns>
              </Box>
            ))}
          </Fragment>
        );
      },
    },
  ],
};
