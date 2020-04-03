import React from 'react';

import { Container } from './styles';

export default function Card({
  title: Title,
  component: Component,
  ...propsComponent
}) {
  return (
    <Container>
      <h1>{Title}</h1>
      <hr />
      <Component {...propsComponent} />
    </Container>
  );
}
