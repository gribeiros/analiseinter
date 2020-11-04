import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

function Footer() {
    return (
        <div>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3">---Alguma coisa aqui depois----</h1>
            <p className="lead">rodapézao.</p>
          </Container>
        </Jumbotron>
      </div>
    )
}

export default Footer