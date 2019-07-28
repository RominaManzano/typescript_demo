import React from 'react';
import styled from 'styled-components';

enum HairColor { Brown, Black, Blonde }

interface Props {
  isRegistered: boolean;
  name: string;
  age: number;
  hobbies: string[];
  hairColor: HairColor;
}

const Interfaces: React.FC<Props> = ({
  isRegistered,
  name,
  age,
  hobbies,
  hairColor,
}: Props) => {
  return (
    <Container>
      <h1>User</h1>

      <div>
        <label>Registered</label>
        <span>
          {isRegistered}
        </span>
      </div>

      <div>
        <label>Name</label>
        <span>
          {name}
        </span>
      </div>

      <div>
        <label>Age</label>
        <span>
          {age}
        </span>
      </div>

      <div>
        <label>Hobbies</label>
        <ul>
          {hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
        </ul>
      </div>

      <div>
        <label>Hair Color</label>
        <span>
          {hairColor}
        </span>
      </div>
    </Container>
  );
};

export default Interfaces;

const Container: React.FC = styled.div`
  background-color: #555555;
`;
