import { style } from 'sku/treat';

export const loader = style({
  color: '#f2f2f2',
  height: 300,
  width: 300,
  maxHeight: 'min(50vw, 50vh)',
  maxWidth: 'min(50vw, 50vh)',
});

export const divider = style(({ border, typography, grid }) => ({
  borderRight: `${border.width.standard}px solid ${border.color.standard}`,
  width: 1,
  height: typography.text.standard.mobile.rows * grid,
}));

export const moveCursor = style({
  cursor: 'move',
});

export const delayPanels = style({
  transitionDelay: '1000ms',
});

const panelShadow = style({
  boxShadow: '0 2px 10px 1px rgba(28,28,28,.1)',
});

const panelSize = style(({ touchableSize, grid }) => ({
  minHeight: touchableSize * grid,
}));

export const panel = [panelShadow, panelSize];

export const panelBackground = style({
  backdropFilter: 'blur(4px)',
  transition: 'opacity .4s ease',
  selectors: {
    [`${panelShadow}:not(:hover) &`]: {
      opacity: 0.85,
    },
  },
});
