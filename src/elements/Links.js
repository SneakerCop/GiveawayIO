import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import {
  dkPurple, navy, white,
} from '../utilities/index';

const TEXT_MODIFIERS = {
  // Color Styles
  dark: () => `
    color: ${navy};
    :hover {
      color: ${dkPurple};
    }
  `,
};

export const Link = styled.a`
  text-decoration: none;
  font-size: 16px;
  color: ${white};
  transition: color .2s ease-in;
  :hover {
    color: ${dkPurple};
  }

  /* Applying Modifers */
  ${applyStyleModifiers(TEXT_MODIFIERS)}
`;
