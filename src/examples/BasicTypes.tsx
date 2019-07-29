import React from 'react';

import {
  ExampleContainer,
  Label,
  TitleH3,
} from '../styles/common';

const BasicTypes: React.FC = () => {
  const isRegistered: boolean = true;
  const name: string = 'Romina';
  const age: number = 26;
  const hobbies: string[] = ['Novels', 'Judo', 'Netflix'];

  enum HairColor { Brown, Black, Blonde }
  const hairColor: HairColor = HairColor.Brown;

  return (
    <ExampleContainer>
      <TitleH3>Basic Types</TitleH3>

      <div>
        <Label>Registered:</Label>
        <span>
          {isRegistered ? 'Yes' : 'No'}
        </span>
      </div>

      <div>
        <Label>Name:</Label>
        <span>{name}</span>
      </div>

      <div>
        <Label>Age:</Label>
        <span>{age}</span>
      </div>

      <div>
        <Label>Hobbies:</Label>
        <ul>
          {hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
        </ul>
      </div>

      <div>
        <Label>Hair Color:</Label>
        <span>{hairColor}</span>
      </div>
    </ExampleContainer>
  );
};

export default BasicTypes;
