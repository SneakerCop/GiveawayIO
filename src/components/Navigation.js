import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-awesome-styled-grid';
import { Text, Link } from '../elements/index';
import { below } from '../utilities/index';
// import { applyStyleModifiers } from 'styled-components-modifiers';

const Navigation = () => (
  <NavBar>
    <Container>
      <Row>
        <Col sm={4} xl={6}>
          <Text style={{ marginTop: '14px' }} modifiers={['small', 'bold']}>GIVEAWAYIO</Text>
        </Col>
        <Col sm={4} xl={6}>
          <NavLinks>
            <li><Link modifiers="dark" href="#growth">Growth</Link></li>
            <li><Link modifiers="dark" href="#connect">Connect</Link></li>
            <li><Link modifiers="dark" href="#community">Community</Link></li>
          </NavLinks>
        </Col>
      </Row>
    </Container>
  </NavBar>
);

const NavBar = styled.nav`
  position: absolute;
  top: 0;
  width: 100%;
  height: 50px;
`;

const NavLinks = styled.ul`
  list-style: none;
  margin: 16px 0;
  padding: 0;
  text-align: right;

  li {
    display:inline;
    a {
      display:inline-block;
      padding:0 10px;
    }
  }

  /* Medium View */
  ${below.sm`
    text-align: center;
  `}
`;

export default Navigation;
