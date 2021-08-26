import React, {useState, useContext} from 'react';
import Select from "react-dropdown-select";
import {options} from './options.js';
import styled from 'styled-components';
import Button from '../../Component/Button';
import { UserContext } from '../../Component/UserProvider';
import { useHistory } from 'react-router';

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
    const { user } = useContext( UserContext);
    const history = useHistory();
    const installPrint = () => {
        setInstallPrint(true);
        setResultMessage(true);
        console.log('value: ', selectPrint);
    }

    if(!user) history.push('/');
    return (
        <Container>
            { resultMessage === null ? <React.Fragment>
                <p>por favor seleccione una de nuestras impresoras</p>
                <Select options={options} onChange={(values) => setSelectPrint(values)} disabled={installingPrint} />
                <Button
                    disabled={!selectPrint}
                    isLoading={installingPrint}
                    text="Seleccionar"
                    onClick={installPrint}>  
                </Button>
            </React.Fragment>
            : <React.Fragment>
                <FinalMessage message /> 
            </React.Fragment>
            }
        </Container>
    );
}

export default Print;