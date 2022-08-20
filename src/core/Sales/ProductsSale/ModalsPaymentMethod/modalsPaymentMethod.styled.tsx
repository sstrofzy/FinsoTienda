import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:100%;
    height:100%;
`
export const Title = styled.span`
    text-align:center;
    font-size:28px;
    width:100%;
    color: #404040;
`
export const SubTitle = styled.span`
    text-align:center;
    width:100%;
    color: #404040;
`
export const SectionButtons = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    gap:20px;
    padding:2rem 0rem;
`
export const ButtonTab = styled.div<{active?:boolean}>`
    display:flex;
    cursor: pointer;
    justify-content:center;
    align-items:center;
    box-shadow: 0px 3px 6px #00000029;
    border-radius:16px;
    background-color: ${({active})=> active ? '#ff5d54' :  '#fff' };
    height:60px;
    width:60px;
`
export const IconModal = styled(FontAwesomeIcon)<{active?:boolean}>`
    color: ${({active})=> active ? '#fff' :  '#ff5d54'};
    font-size:35px;
`
