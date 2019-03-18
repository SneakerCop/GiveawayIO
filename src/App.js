import React from 'react';
import {
  Text, Heading, Image,
} from './elements/index';
import GlobalStyle from './Global';
// Components
import Navigation from './components/Navigation';
import Connect from './components/Connect';
import Community from './components/Community';
import Growth from './components/Growth';
import Footer from './components/Footer';
// Image
import Gift from './assets/gift.svg';

const App = () => (
  <div>
    {/* Global Styles */}
    <GlobalStyle />
    {/* Header */}
    <header>
      <Navigation />
      <Heading modifiers={['semiBold', 'center']} style={{ marginTop: '125px' }}>Party Time?</Heading>
      <Text modifiers={['light', 'center']}>Easily create and share giveaways with your community.</Text>
      <Image modifiers="center" src={Gift} alt="Party Gift with Balloons" />
    </header>
    <main>
      <Connect />
      <Community />
      <Growth />
      {/* <Heading modifiers={['semiBold', 'sub']}>Community</Heading>
      <Text>Hello World</Text>
      <Button><a href="#home">Hello World</a></Button>
      <br />
      <Button modifiers="outlined"><a href="#home2">Hello World</a></Button> */}
    </main>
    <Footer />
  </div>
);

export default App;
