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

const Print = () => {
    const [selectPrint, setSelectPrint] = useState(false);
    const [installingPrint, setInstallPrint] = useState(false);
    const { user } = useContext( UserContext);
    const history = useHistory();
    const installPrint = () => {
        setInstallPrint(true);
        console.log('value: ', selectPrint);
    }

    if(!user) history.push('/');
    return (
        <Container>
            <p>por favor seleccione una de nuestras impresoras</p>
            <Select options={options} onChange={(values) => setSelectPrint(values)} disabled={installingPrint} />
            <Button
                disabled={!selectPrint}
                isLoading={installingPrint}
                text="Seleccionar"
                onClick={installPrint}>  
            </Button>
        </Container>
    );
}

export default Print;