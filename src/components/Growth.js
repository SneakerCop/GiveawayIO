import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-awesome-styled-grid';
import {
  Heading, Image, Text, Button,
} from '../elements/index';
import { below } from '../utilities/index';
import GrowthGraphic from '../assets/growth.svg';

const Growth = () => (
  <section id="growth" style={{ marginTop: '250px', marginBottom: '100px' }}>
    <Container>
      <Row>
        <Col sm={8} md={4} lg={6} xl={6}>
          <Image modifiers="center" src={GrowthGraphic} alt="Growth Graphic" />
        </Col>
        <Col sm={8} md={4} lg={6} xl={6} style={{ alignContent: 'right' }}>
          <Heading modifiers={['sub', 'right']}>Growth</Heading>
          <Text modifiers={['light', 'right']}>Expand and reach out to  your community by doing giveaways. Who doesn’t like free stuff?</Text>
          <ButtonContainer>
            <Button><a href="#getstarted">Get Started</a></Button>
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

export default Growth;
