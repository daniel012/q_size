import React, { useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { UserContext } from '../../Component/UserProvider';
import Button from '../../Component/Button';

const Wrapper = styled.div`
  margin: auto;
  text-align: center;
  width: 50%;
  padding-top: 50px;
`;

const Login = () => {
  const [isSearching, setSeatching] = useState(false);
  const history = useHistory();
  const { setUser } = React.useContext(UserContext);

  const validateUser = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const pass = event.target.pass.value;
    if (!!name && !!pass) {
      if (name === 'CAST' && pass === 'QuaLit4$TI') {
        toast.success('bienvenido');
        setUser(event.target.name.value);
        setSeatching(true);
        history.push('/prints');
      } else {
        toast.error('usuario invalido');
      }
    }
  };
  return (
    <Wrapper>
      <form onSubmit={validateUser}>
        <div>
          <img src={`${process.env.PUBLIC_URL}/qualitas.png`} alt="qulitas logo" />
        </div>
        <div style={{ marginBottom: '5px' }}>
          <label htmlFor="name">Nombre: </label>
          <input id="name" disabled={isSearching}></input>
        </div>
        <div>
          <label htmlFor="pass">Contraseña: </label>
          <input id="pass" type="password" disabled={isSearching}></input>
        </div>
        <Button isLoading={isSearching} text="Login" type="submit" />
      </form>
    </Wrapper>
  );
};
export default Login;
