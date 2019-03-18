import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-awesome-styled-grid';
import {
  Heading, Image, Text, Button,
} from '../elements/index';
import { below } from '../utilities/index';
import ConnectGraphic from '../assets/connect.svg';

const Connect = () => (
  <section id="connect" style={{ marginTop: '250px' }}>
    <Container>
      <Row>
        <Col sm={8} md={4} lg={6} xl={6}>
          <Image modifiers="center" src={ConnectGraphic} alt="Connect Graphic" />
        </Col>
        <Col sm={8} md={4} lg={6} xl={6}>
          <Heading modifiers={['sub', 'right']}>Connect</Heading>
          <Text modifiers={['light', 'right']}>Build, host, and launch your giveaways straight to the platform of your choosing.</Text>
          <ButtonContainer>
            <Button><a href="#connect">Connect</a></Button>
          </ButtonContainer>
        </Col>
      </Row>
    </Container>
  </section>
);

const ButtonContainer = styled.div`
  text-align: right;

  /* Medium View */
  ${below.md`
    text-align: center;
  `}
`;

export default Connect;
