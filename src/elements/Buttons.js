import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import {
  elevation, dkGreen, white, ltGreen,
} from '../utilities/index';

const BUTTON_MODIFIERS = {
  outlined: () => `
    background: none;
    border: 3px ${dkGreen} solid;
    a {
      color: ${dkGreen};
    }
  `,
};

export const Button = styled.button`
  display: inline-block;
  background: ${dkGreen};
  border: none;
  border-radius: 5px;
  outline: none;
  padding: 10px 15px;
  transition: background .2s ease-in;
  ${elevation[2]};

  a {
    text-decoration: none;
    color: ${white};
    padding: 10px 15px;
  }

  :hover {
    background: ${ltGreen}
  }

  /* Applying Modifers */
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;
