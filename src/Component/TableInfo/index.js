import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../Button';
import './index.css';

const Container = styled.div`
  padding: 5px;
  overflow-y: scroll;
  height: 500px;
`;

const CellInfo = styled.td`
    display: flex;
    flex: 1;
    justify-content: space-around;
    div:nth-child(1) {
      margin-left: 5px;
    }
    div:nth-child(2) {
      width: 90%;
      text-align: center;
    }
`;

const TableInfo = ({ info, action }) => {
  if (!info || info.size === 0) return <p>no se a encontrado la informacion que busca</p>;
  return (
    <Container disabled>
      <table className="greyGridTable">
        <tr>
          <th >IP</th>
          <th>Nombre</th>
          <th>SISE</th>
          <th>Modelo</th>
        </tr>
        {info.map(({ ip, nombre, modelo, sise }) => (
          <tr>
            <CellInfo>
              <div>
                <Button text="Reparar" style={{padding: '1px 20px'}} onClick={action} name={ip} disabled={!ip} />
              </div>
              <div>
                <a href={`http://${ip}`} target="_blank">{ip}</a>
              </div>
            </CellInfo>
            <td>{nombre}</td>
            <td>{sise}</td>
            <td>{modelo}</td>
          </tr>
        ))}
      </table>
    </Container>
  );
};

TableInfo.propTypes = {
  info: PropTypes.array,
  action: PropTypes.func,
};

TableInfo.defaultProps = {
  info: [],
  action: ()=>{},
};

export default TableInfo;
