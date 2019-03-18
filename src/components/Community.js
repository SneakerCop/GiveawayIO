import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-awesome-styled-grid';
import { below } from '../utilities/index';
import {
  Heading, Image, Text, Button,
} from '../elements/index';
import CommunityGraphic from '../assets/community.svg';

const Community = () => (
  <section id="community" style={{ marginTop: '250px' }}>
    <Container>
      <Row>
        <Col sm={8} md={4} lg={6} xl={6}>
          <Heading modifiers="sub">Community</Heading>
          <Text modifiers="light">Community comes first for content creators, so why would we put it last?</Text>
          <ButtonContainer>
            <Button><a href="#sendinvite">Send Invite</a></Button>
          </ButtonContainer>
        </Col>
        <Col sm={8} md={4} lg={6} xl={6}>
          <Image modifiers="center" src={CommunityGraphic} alt="Community Graphic" />
        </Col>
      </Row>
    </Container>
  </section>
);

const ButtonContainer = styled.div`
  text-align: left;

  /* Medium View */
  ${below.md`
    text-align: center;
  `}
`;

export default Community;
