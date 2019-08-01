import React from 'react';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import {
  MdInfoOutline,
  MdHighlightOff,
} from 'react-icons/md';

/*
  SIMPLE INTERFACE
  ----------------
  We use interfaces to define the shape and types that functional component
  props will have. In this case, we have 2 props, one of which is optional.
*/
interface Props {
  message: string;
  type?: string;
}

/* TYPE ALIAS */
type RenderIcon = () => React.ReactNode;

const Message: React.FC<Props> = ({ message, type }: Props) => {
  const renderIcon: RenderIcon = (): React.ReactNode => {
    if (type === 'error') {
      return (
        <IconContext.Provider value={{ color: '#f35050', size: '4em' }}>
          <MdHighlightOff />
        </IconContext.Provider>
      );
    }

    return (
      <IconContext.Provider value={{ color: '#7da1f7', size: '4em' }}>
        <MdInfoOutline />
      </IconContext.Provider>
    );
  };

  return (
    <MessageWrapper>
      {renderIcon()}
      <MessageText>
        {message}
      </MessageText>
    </MessageWrapper>
  );
};

Message.defaultProps = {
  type: 'info',
};

export default Message;

const MessageWrapper: React.FC = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MessageText: React.FC = styled.div`
  font-size: 25px;
  color: #797979;
`;
