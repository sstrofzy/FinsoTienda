
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'


export const ContentCard = styled.div`
    display:flex;
    flex-direction:column;
    gap:10px;
` 
export const Card = styled.div`
    display:flex;
    flex-direction:column;
    border-radius:16px;
    box-shadow: 0px 3px 6px #00000029;
    background-color:#fff;
    gap:15px;
    width:100%;
    padding:5px;
    overflow:hidden;
    height:180px;
` 
export const Section = styled.div<{height?:string, bgColor?:string}>`
    display:flex;
    background-color:${({bgColor}) => bgColor || '#FF5D54'};
    justify-content:center;
    align-items:center;
    flex-direction:column;
    width:100%;
    gap:3px;
    height:${({height}) => height || '25%'};
` 
export const TitleCard = styled.span<{fSize?:string, fWeight?:string}>`
    width:100%;
    font-size:${({fSize}) => fSize || '12px'};
    color:#000;
    text-align:center;
` 
export const WrapperButtons = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    background-color:#fff;
    box-shadow: 0px 3px 6px #00000029;
    border-radius:12px;
    overflow:hidden;
    height:45px;
` 
export const SectionButtons = styled.div<{bgColor?:string, cursor?:string}>`
    display:flex;
    justify-content:center;
    align-items:center;
    width:33%;
    font-weight:600;
    cursor: ${({cursor}) => cursor || 'pointer'};
    background-color:${({bgColor}) => bgColor || '#FF5D54'};
` 
export const IconButtons = styled(FontAwesomeIcon)`
    font-size:18px;
    color:#fff;
` 