import React from 'react';
import UserDetail from './Interfaces';

class ClassBasedComponent extends React.Component<{}, {}> {
  public getHobbies = (): string[] => {
    return [
      'Judo',
      'Netflix',
      'Novels',
    ];
  }

  public render(): React.ReactNode {
    return (
      <UserDetail
        isRegistered={true}
        name="Romina Manzano"
        age={26}
        hobbies={this.getHobbies()}
        hairColor={0}
        title="Class Based Component"
      />
    );
  }
}

export default ClassBasedComponent;
