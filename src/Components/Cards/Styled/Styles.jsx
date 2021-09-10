import styled from 'styled-components'

const ContenedorCards = styled.div`
display:grid;
grid-template-columns: repeat(auto-fill, 220px);
grid-gap:20px;
width:90%;
margin:auto;
`;


const ContTarjetas = styled.div`
display:flex;
flex-direction: column;
align-items:center;
`;

const ModalHeaderStyle = styled.div`
    display: flex;
    justify-content: flex-end;
    padding:20px;    
`;

const ModalBodyStyle = styled.div`
    display: flex;
    color:white;
    padding:20px;
`;

const ModalBodyOverviewStyle = styled.div`
    display: flex;
    flex-direction: column;
    text-align:justify;
    padding:20px;
`;

const ModalBodyImgStyle = styled.img`
    width:30%;
`;


export const ContCards = ContenedorCards

export const Tarjetas = ContTarjetas
export const ModalBody = ModalBodyStyle
export const ModalBodyOverview = ModalBodyOverviewStyle
export const ModalHeader = ModalHeaderStyle
export const ModalBodyImg =  ModalBodyImgStyle


