import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-awesome-styled-grid';
import { dkGreen } from '../utilities/index';
import { Text, Link } from '../elements/index';
// import { applyStyleModifiers } from 'styled-components-modifiers';

const Footer = () => (
  <FooterBar>
    <Container>
      <Row>
        <Col xs={2} xl={6}><Text style={{ marginTop: '15px' }} modifiers={['small', 'left', 'white']}>Copyright &copy; 2019 GiveawayIO</Text></Col>
        <Col xs={2} xl={6}><Text style={{ marginTop: '15px' }} modifiers={['small', 'right', 'white']}>Built with <span role="img" aria-label="Pink Heart Emoji">💖</span> by <Link href="https://twitter.com/learningszn" target="_blank" rel="noopener noreferrer">Ethan</Link></Text></Col>
      </Row>
    </Container>
  </FooterBar>
);

const FooterBar = styled.div`
  width: 100%;
  height: 50px;
  background: ${dkGreen};
`;

export default Footer;
