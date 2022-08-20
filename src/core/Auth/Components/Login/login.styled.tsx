import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin:20px 0px;
    width:400px;
    height:100%;
    gap:25px;
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
    color:#90a4ae;
    font-size:15px;
    top:38%;
    right:4%;
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
    border:1px solid #fff;
    height:50px;
    padding: 0px 12px;
    &:focus {
        border: 2px solid #fff;
    }
    ::placeholder {
        color: #fff;
}
`
export const ButtonIn = styled.button`
    display:flex;
    margin-top:5px;
    font-size:16px;
    justify-content:center;
    align-items:center;
    color: #CECECE;
    border-radius:30px;
    border:none;
    background: #F5F5F5;
    box-shadow: 0px 3px 6px #00000029;
    outline: none;
    height:50px;
    padding: 0px 12px;
    width:100%;
    cursor: pointer;
`