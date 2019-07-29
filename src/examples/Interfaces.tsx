import React from 'react';

import {
  ExampleContainer,
  Label,
  TitleH3,
} from '../styles/common';

enum HairColor { Brown, Black, Blonde }

interface Props {
  isRegistered: boolean;
  name: string;
  age: number;
  hobbies: string[];
  hairColor: HairColor;
  title: string;
}

const Interfaces: React.FC<Props> = ({
  isRegistered,
  name,
  age,
  hobbies,
  hairColor,
  title,
}: Props) => {
  return (
    <ExampleContainer>
      <TitleH3>{title}</TitleH3>

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

export default Interfaces;
