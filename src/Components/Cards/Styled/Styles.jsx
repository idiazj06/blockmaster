import styled from 'styled-components'

const PerfilStyle = styled.div`
display:flex;
padding:20px 10px;
font-size:40px;
text-align:center;
color:white;
`;

const ContenedorCards = styled.div`
display:grid;
grid-template-columns: repeat(auto-fill, 220px);
grid-gap:20px;
padding:20px;
justify-content:center;
`;

const ContTarjetas = styled.div`
display:flex;
justify-content:center;

`;

const ModalHeaderStyle = styled.div`
    position:absolute;
    left:97%;
    top:2%;  
`;

const buttonCerrarModal = styled.input`
 border:none;
 background:transparent;
 color:grey;
    &:hover{
        color:#FFFFFA
    }
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

const BtnTrailerStyle = styled.input`
    border:none;
    margin:10px;
    background:#FED941;
    width:45%;
    padding:5px;
    border-radius:5px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 28px;
    text-align: center;
    color: #000000;
`;

const BtnDespuesStyle = styled.input`
    border:none;
    margin:10px;
    background:#0C0E16;
    width:45%;
    padding:5px;
    border-radius:5px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 28px;
    text-align: center;
    color: #FED941;
`;

const BadgeStyle = styled.span`
    position:relative;
    top:20%;
    width:114px;
    height:45px;
    background: rgba(0, 0, 0, 0.73);
    border-radius: 40px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    display:flex;
    align-items:center;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 34px;
    text-align: center;
    letter-spacing: 0.01em;
    color: #FFFFFE;
    border: 1px solid #FED941;
    border-left:none;
    justify-content:center;
`;




export const ContCards = ContenedorCards
export const Tarjetas = ContTarjetas
export const ModalBody = ModalBodyStyle
export const ModalBodyOverview = ModalBodyOverviewStyle
export const ModalHeader = ModalHeaderStyle
export const ModalBodyImg =  ModalBodyImgStyle

export const InputClose = buttonCerrarModal
export const BtnTrailer = BtnTrailerStyle
export const BtnDespues = BtnDespuesStyle
export const Badge = BadgeStyle
export const Perfil = PerfilStyle


