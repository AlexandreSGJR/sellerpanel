import React from 'react';
import { Container } from './styles';

export function Header() {
  return (
    <Container>
      <div className="option">
        <span>Home</span>
      </div>
      <div className="option">
        <span>Produtos</span>
      </div>
      <div className="option">
        <span>Clientes</span>
      </div>
      <div className="option">
        <span>Configurações</span>
      </div>
    </Container>
  );
}
