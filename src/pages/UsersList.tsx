import React from 'react';
import styled from 'styled-components';

const UsersList: React.FC = () => {
  return (
    <Title>
      ListMeApp
    </Title>
  );
};

export default UsersList;

const Title: React.FC = styled.h2`
  margin-top: 20px;
  font-family: 'Baloo Bhai', cursive;
  color: #f77d92;
  text-align: center;
`;
