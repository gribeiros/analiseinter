import React from 'react'
import { Jumbotron, Container } from 'reactstrap';

function Article(props) {
    return (
        <div>
            <Jumbotron fluid>
                <Container fluid>
                    <h1 className="display-3">ANÁLISE DE DESEMPENHO</h1>
                    <p className="lead">Projeto criado para o interdisciplinar</p>
                </Container>
            </Jumbotron>
        </div>
    );
};
export default Article