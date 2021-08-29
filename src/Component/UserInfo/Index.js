import React, { useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from '../UserProvider';

const Container = styled.div`
  text-align: right;
`;

const UserInfo = () => {
  const { user, setUser } = useContext(UserContext);
  const CloseSession = () => {
    setUser(false);
  };
  if (!user) return <></>;
  return (
    <Container>
      {user} |
      <a href="#" onClick={CloseSession}>
        Cerrar Sesion
      </a>
    </Container>
  );
};

export default UserInfo;
