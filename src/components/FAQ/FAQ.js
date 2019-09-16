import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { FAQPageContent } from '../../data/dataStore';

const FAQ = () => (
  <Container>
    <Hero titleText={FAQPageContent.title} image={FAQPageContent.image} />
    <p>{FAQPageContent.description}</p>
  </Container>
);

export default FAQ;