// tslint:disable: no-any
import React from 'react';
import styled, { StyledComponent } from 'styled-components';
import {
  Button,
  Input,
  InputGroup,
  InputGroupAddon,
} from 'reactstrap';
import { MdSearch } from 'react-icons/md';

/*
  ALIAS DE TIPO
  -------------
  Abstraemos el tipado con su propio alias, para poder usarlo luego, de manera
  más ordenada.
  Los tipos de eventos, pueden obtenerse utilizando el intellisense.
*/
type OnChangeFunc = (event: React.SyntheticEvent<HTMLInputElement>) => void;
type OnSubmitFunc = (event: React.FormEvent<HTMLFormElement>) => void;

interface Props {
  onChange: OnChangeFunc;
  onSubmit: OnSubmitFunc;
  term: string;
}

const SearchBar: React.FC<Props> = (props: Props) => {
  const {
    term,
    onChange,
    onSubmit,
  }: Props = props;

  return (
    <form onSubmit={onSubmit}>
      <InputGroup>
        <Input
          value={term}
          onChange={onChange}
          placeholder="Search user"
        />
        <InputGroupAddon addonType="append">
          <SearchButton type="submit">
            <MdSearch />
          </SearchButton>
        </InputGroupAddon>
      </InputGroup>
    </form>
  );
};

export default SearchBar;

type SearchButtonType = StyledComponent<typeof Button, any, {}, never>;

const SearchButton: SearchButtonType = styled(Button)`
  && {
    background-color: #f77d92;
    border-color: #f94d6b;

    &:hover {
      background-color: #f793a4;
      border-color: #f77d92;
    }

    &&:active {
      background-color: #f793a4;
      border-color: #f77d92;
    }
  }
`;
