import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { infoPageContent } from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero titleText={infoPageContent.title} image={infoPageContent.image} />
    <p>{infoPageContent.description}</p>
  </Container>
);

export default Info;