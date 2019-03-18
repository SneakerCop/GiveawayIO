import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { below } from '../utilities/index';

const BUTTON_MODIFIERS = {
  // Size Styles

  // Alignment Styles
  left: () => `

  `,

  center: () => `
    display: block;
    margin-left: auto;
    margin-right: auto;
  `,

  right: () => `
    
  `,
};

export const Image = styled.img`
  width: 500px;

  /* Medium View */
  ${below.md`
    width: 400px;
  `}

  /* Mobile View */
  ${below.sm`
    width: 300px;
  `}
  
  /* Applying Modifers */
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;
