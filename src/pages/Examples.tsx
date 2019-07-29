import React from 'react';
import {
  Col,
  Container,
  Row,
} from 'reactstrap';

import BasicTypes from '../examples/BasicTypes';
import ClassBasedComponent from '../examples/ClassBasedComponent';
import FuncionalComponent from '../examples/FunctionalComponent';
import Interfaces from '../examples/Interfaces';
import { TitleH2 } from '../styles/common';

const Examples: React.FC = () => {
  return (
    <Container>
      <TitleH2>
        Examples
      </TitleH2>

      <Row>
        <Col>
          <BasicTypes />
        </Col>

        <Col>
          <Interfaces
            isRegistered={true}
            name="Romina"
            age={26}
            hobbies={['Novels', 'Judo', 'Netflix']}
            hairColor={0}
            title="Interfaces"
          />
        </Col>
      </Row>

      <br />

      <Row>
        <Col>
          <FuncionalComponent />
        </Col>
        <Col>
          <ClassBasedComponent />
        </Col>
      </Row>

      <br />
    </Container>
  );
};

export default Examples;
