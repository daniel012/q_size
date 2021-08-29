import React, {useState, useContext, useEffect} from 'react';
import styled from 'styled-components';
import Button from '../../Component/Button';
import { UserContext } from '../../Component/UserProvider';
import { useHistory } from 'react-router';
import axios from 'axios';
import TableInfo from '../../Component/TableInfo';

const Container = styled.div`
    padding: 5px;
`;

const SUCCESS_MESSAGE = 'por favor valide que su impresora funcione correctamente';
const ERROR_MESSAGE = 'Hubo un error por favor comuniquese con su administrador';

const Print = () => {
    const [selectPrint, setSelectPrint] = useState(false);
    const [prints, setPrints] = useState(false);
    const [resultMessage, setResultMessage] = useState(null);
    const [key, setKey] = useState("");
    const { user } = useContext( UserContext);
    const history = useHistory();
    const installPrint = () => {
        setResultMessage(true);
        console.log('value: ', selectPrint);
    }
    const searchPrint = event => {
        if (event.key === 'Enter') {
            axios.get(`http://localhost:5000/?key=${key}`)
                .then(({data}) => setPrints(data))
                .catch((error) => {
                    console.log(error);
                })
        }

    }
    if(!user) history.push('/');

    useEffect(()=> {
        if(!prints) {
            axios.get(`http://localhost:5000/`)
            .then(({data}) => setPrints(data))
            .catch((error) => {
            });
        }
    });



    return (
        <Container>
            <React.Fragment>
                <p>por favor seleccione una de nuestras impresoras</p>
                <input onChange={(event)=> setKey(event.target.value) } onKeyDown={searchPrint} value={key}/>
                <TableInfo info={prints} />
                <Button
                    text="Seleccionar"
                    onClick={installPrint}>
                </Button>
            </React.Fragment>
        </Container>
    );
}

export default Print;
