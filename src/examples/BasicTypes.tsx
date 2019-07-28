import React from 'react';
import styled from 'styled-components';

const BasicTypes: React.FC = () => {
  const isRegistered: boolean = true;
  const name: string = 'Hello';
  const age: number = 26;
  const hobbies: string[] = ['Novels', 'Judo', 'Netflix'];

  enum HairColor { Brown, Black, Blonde }
  const hairColor: HairColor = HairColor.Brown;

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

export default BasicTypes;

const Container: React.FC = styled.div`
  background-color: #555555;
`;
