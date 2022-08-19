import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:#fff;
    width:100%;
    height:84px;
    padding:15px;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 0px 0px 16px 0px;
`
export const BoxInput = styled.div`
    display:flex;
    position:relative;
    flex-direction:column;
    width:100%;
`
export const Icon = styled(FontAwesomeIcon)`
    display:flex;
    position:absolute;
    color:#FF5D54;
    font-size:20px;
    top:28%;
    right:1%;
    cursor: pointer;
`
export const Input = styled.input`
    display:flex;
    border: 2px solid rgb(255, 255, 255, 0);
    transition: border 0.2s ease-in-out;
    color: #90a4ae;
    border-radius:5px;
    background-color:transparent;
    outline: none;
    border:1px solid #FF5D54;
    height:50px;
    padding: 0px 12px;
    &:focus {
        border: 2px solid #FF5D54;
    }
    ::placeholder {
        color: #FF5D54;
}
`