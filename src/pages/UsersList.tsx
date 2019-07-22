import React from 'react';
import styled from 'styled-components';
import {
  Col,
  Container,
  Row,
} from 'reactstrap';
import { AxiosResponse } from 'axios';

import API from '../data/api';
import Message from '../components/Message';
import PlaceholderList from '../components/PlaceholderList';
import SearchBar from '../components/SearchBar';
import UserThumb from '../components/UserThumb';
import { UserType } from '../types/UserType';

interface State {
  searchTerm: string;
  usersList: UserType[];
  usersListLoadingState: 'needed' | 'fetching' | 'loaded' | 'error';
}

class UsersList extends React.Component<{}, State> {
  public state: State = {
    searchTerm: '',
    usersList: [],
    usersListLoadingState: 'needed',
  };

  public async componentDidMount(): Promise<void> {
    const { usersListLoadingState }: State = this.state;

    if (usersListLoadingState === 'needed') {
      this.fetchUsersList();
    }
  }

  public fetchUsersList = async () => {
    this.setState({ usersListLoadingState: 'fetching' });

    try {
      const res: AxiosResponse = await API.get('/api', {
        headers: { 'Content-Type': 'application/json' },
        params: { results: 32 },
      });

      this.setState({
        usersList: res.data.results,
        usersListLoadingState: 'loaded',
      });
    } catch (error) {
      this.setState({ usersListLoadingState: 'error' });
    }
  }

  public searchUsers = () => {
    const {
      searchTerm,
      usersList,
    }: State = this.state;

    const newUsersList: UserType[] = usersList.filter(({ name }: UserType) => {
      const containsFirst: boolean = name.first.includes(searchTerm.toLowerCase());
      const containsLast: boolean = name.last.includes(searchTerm.toLowerCase());

      const fullName: string = `${name.first} ${name.last}`;
      const containsBoth: boolean = fullName.includes(searchTerm.toLowerCase());

      return containsFirst || containsLast || containsBoth;
    });

    this.setState({ usersList: newUsersList });
  }

  public handleSearchChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    event.preventDefault();
    this.setState({ searchTerm: event.currentTarget.value });
  }

  public handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const { searchTerm }: State = this.state;
    event.preventDefault();

    if (!searchTerm) {
      this.fetchUsersList();
    } else {
      this.searchUsers();
    }
  }

  public renderSearchBar = (): React.ReactNode => {
    const { searchTerm }: State = this.state;

    return (
      <Row>
        <Col lg={{ size: 4, offset: 4 }} md={{ size: 6, offset: 3 }} xs="12">
          <SearchBar
            term={searchTerm}
            onChange={this.handleSearchChange}
            onSubmit={this.handleSearchSubmit}
          />
        </Col>
      </Row>
    );
  }

  public renderUsersList = (): React.ReactNode => {
    const {
      usersList,
      usersListLoadingState,
    }: State = this.state;

    if (usersListLoadingState === 'fetching') {
      return <PlaceholderList />;
    }

    if (usersList.length <= 0) {
      return (
        <Message
          type="info"
          message="No results found"
        />
      );
    }

    if (usersListLoadingState === 'error') {
      return (
        <Message
          type="error"
          message="Oops! Seems you ecountered an error."
        />
      );
    }

    return usersList.map((user: UserType) => (
      <Col key={user.login.username} lg="3" md="6">
        <UserThumb user={user} />
      </Col>
    ));
  }

  public render(): React.ReactNode {
    return (
      <Container fluid={true}>
        <Title>
          ListMeApp
        </Title>
        <Description>
          If you want to get detailed contact information for a specific user,
          click on their thumbnail. To close the modal, click on any area outise of
          it or the <b>X</b> icon.
          <br />
          Input a name or last name to search for a specific user. To reset the list,
          clear the search input.
        </Description>

        {this.renderSearchBar()}

        <hr />

        <StyledRow>
          {this.renderUsersList()}
        </StyledRow>
      </Container>
    );
  }
}

export default UsersList;

const Title: React.FC = styled.h2`
  margin-top: 20px;
  font-family: 'Baloo Bhai', cursive;
  color: #f77d92;
  text-align: center;
`;

const Description: React.FC = styled.p`
  padding: 10px 0;
  color: #797979;
  text-align: center;
`;

const StyledRow: React.FC = styled(Row)`
  height: 65vh;
  overflow: scroll;
`;
