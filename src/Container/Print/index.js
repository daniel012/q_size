import React, {useState, useContext} from 'react';
import styled from 'styled-components';
import Button from '../../Component/Button';
import { UserContext } from '../../Component/UserProvider';
import { useHistory } from 'react-router';
import axios from 'axios';


const Container = styled.div`
    padding: 5px;
`;

const SUCCESS_MESSAGE = 'por favor valide que su impresora funcione correctamente';
const ERROR_MESSAGE = 'Hubo un error por favor comuniquese con su administrador';

const FinalMessage = ({message}) => {
    return(
        <p>{message ? SUCCESS_MESSAGE: ERROR_MESSAGE} </p>
    )
}

const Print = () => {
    const [selectPrint, setSelectPrint] = useState(false);
    const [installingPrint, setInstallPrint] = useState(false);
    const [resultMessage, setResultMessage] = useState(null);
    const [key, setKey] = useState("");
    const { user } = useContext( UserContext);
    const history = useHistory();
    const installPrint = () => {
        setInstallPrint(true);
        setResultMessage(true);
        console.log('value: ', selectPrint);
    }
    const searchPrint = event => {
        if (event.key === 'Enter') {
            axios.get(`http://localhost:5000/?key=${key}`)
                .then(function (response) {
                    console.log(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
        
    }
    if(!user) history.push('/');
    return (
        <Container>
            <React.Fragment>
                <p>por favor seleccione una de nuestras impresoras</p>
                <input onChange={(event)=> setKey(event.target.value) } onKeyDown={searchPrint} value={key}/>
                <Button
                    disabled={!selectPrint}
                    isLoading={installingPrint}
                    text="Seleccionar"
                    onClick={installPrint}>  
                </Button>
            </React.Fragment>
        </Container>
    );
}

export default Print;