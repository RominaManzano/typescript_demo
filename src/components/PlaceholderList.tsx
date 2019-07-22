import React from 'react';
import { Col } from 'reactstrap';

import PlaceholderThumb from './PlaceholderThumb';

const PlaceholderList: React.FC = () => {
  const placeholders: React.ReactNode[] = [];

  for (let i: number = 0; i < 32; i = i + 1) {
    const placeholder: React.ReactNode = (
      <Col lg="3" md="6" key={i}>
        <PlaceholderThumb />
      </Col>
    );

    placeholders.push(placeholder);
  }

  return (
    <React.Fragment>
      {placeholders}
    </React.Fragment>
  );
};

export default PlaceholderList;
