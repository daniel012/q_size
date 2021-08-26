import React, {useState} from 'react';
import styled from 'styled-components';
import Button from '../Button';
const Wrapper = styled.div`
    margin: auto;
    text-align: center;
    width: 50%;
    padding-top: 50px;
`;

const Login = () => {
    const [isSearching, setSeatching] = useState(false);
    const validateUser = (event) => {
        event.preventDefault();
        setSeatching(true);
        //alert('guapo')
    }
    return (
        <Wrapper>
            <form onSubmit={validateUser}>
                <div>
                <img src={process.env.PUBLIC_URL + '/qualitas.png'} alt="qulitas logo"/> 
                </div>
                <div style={{ marginBottom: '5px'}}>
                    <label htmlFor="name">Nombre: </label>
                    <input id="name" disabled={isSearching}></input>
                </div>
                <div>
                    <label htmlFor="pass">Contraseña: </label>
                    <input id="pass" type="password" disabled={isSearching}></input>
                </div>
                <Button isLoading={isSearching} text="Login" onClick={validateUser} type="submit"/>

            </form>
        </Wrapper> 
        
    );
}
export default Login;