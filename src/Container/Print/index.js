import React, {useState, useContext, useEffect} from 'react';
import styled from 'styled-components';
import { UserContext } from '../../Component/UserProvider';
import { useHistory } from 'react-router';
import axios from 'axios';
import TableInfo from '../../Component/TableInfo';
import { toast } from 'react-toastify';

const Container = styled.div`
    padding: 5px;
    ${({installing}) => installing && 'opacity: 0.4; pointer-events: none;' }
`;

const Print = () => {
    const [installPrint, setInstallPrint] = useState(false);
    const [prints, setPrints] = useState(false);
    const [key, setKey] = useState("");
    const { user } = useContext( UserContext);
    const history = useHistory();
    const InfoInstall = (event) => {
      const ip = event.target.name;
      toast.info(`Instalando Impresora: ${ip} por favor espere`);
      setInstallPrint(true)
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

            axios.get(`http://localhost:5000/`)
            .then(({data}) => setPrints(data))
            .catch((error) => {
            });

    },[]);



    return (
        <Container installing={installPrint}>
            <p>por favor seleccione una de nuestras impresoras</p>
            <input
              onChange={(event)=> setKey(event.target.value) }
              onKeyDown={searchPrint}
              value={key}
              placeholder="Buscar..."
              />
            {prints && <TableInfo info={prints} action={InfoInstall} />}
        </Container>
    );
}

export default Print;
