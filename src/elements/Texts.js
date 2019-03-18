import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { navy, below } from '../utilities/index';

const TEXT_MODIFIERS = {
  // Size Styles
  small: () => `
    font-size: 16px;
  `,

  // Font Weight Styles
  light: () => `
    font-weight: 300;
  `,

  medium: () => `
    font-weight: 500;
  `,

  semiBold: () => `
    font-weight: 600;
  `,

  bold: () => `
    font-weight: 700;
  `,

  // Alignment Styles
  left: () => `
    text-align: left;
  `,

  center: () => `
    text-align: center;
  `,

  right: () => `
    text-align: right;
  `,
};

export const Text = styled.p`
  font-size: 28px;
  margin-top: 0;
  color: ${navy};

  /* Medium View */
  ${below.md`
    text-align: center;
  `}

  /* Applying Modifers */
  ${applyStyleModifiers(TEXT_MODIFIERS)}
`;
