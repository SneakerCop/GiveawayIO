import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { navy, below } from '../utilities/index';

const HEADING_MODIFIERS = {
  // Heading Variabtions
  sub: () => `
    font-size: 58px;
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

export const Heading = styled.h1`
  font-size: 72px;
  line-height: 0;
  color: ${navy};

  /* Medium View */
  ${below.md`
    text-align: center;
  `}

  /* Applying Modifers */
  ${applyStyleModifiers(HEADING_MODIFIERS)}
`;
