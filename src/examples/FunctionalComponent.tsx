import React from 'react';
import UserDetail from './Interfaces';

type GetHobbiesType = () => string[];

const FunctionalComponent: React.FC = () => {
  const getHobbies: GetHobbiesType = (): string[] => {
    return [
      'Judo',
      'Netflix',
      'Novels',
    ];
  };

  return (
    <UserDetail
      isRegistered={true}
      name="Romina Manzano"
      age={26}
      hobbies={getHobbies()}
      hairColor={0}
      title="Functional Component"
    />
  );
};

export default FunctionalComponent;
