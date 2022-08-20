import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

type TContainerAside = {
    show?: boolean
}
export const ContainerAside = styled.div<TContainerAside>`
    position:absolute;
    display:flex;
    top:0;
    right:0px;
    flex-direction: column;
    align-items: center;
    justify-content:space-between;
    box-shadow: 0px 3px 6px #00000029;
    height:100%;
    transition:.3s;
    width: 184px;
    background-color:#fff;
    border-radius: 24px 0px 0px 0px;
`
export const TopSection = styled.div`
    display: flex;
    width:100%;
    height:20%;
    gap:15px;
    flex-direction: column;
    justify-content:end;
    align-items:flex-end;
`
export const TotalPrice = styled.div`
    display: flex;
    width:100%;
    height:84px;
    background-color:#EFEFEF;
    border-top:1px dashed  #FF5D54;
    border-bottom:1px dashed  #FF5D54;
    flex-direction: column;
    justify-content: center;
    align-items:center;
`
export const DivTitle = styled.div<{width?:string}>`
    display: flex;
    flex-direction:row;
    align-items:center;
    gap:10px;
    justify-content:center;
    width:100%;
`
export const SpanCart = styled.span`
    text-align:start;
    width:90px;
    font-size:16px;
    color:#FF5D54;
`
export const Icon = styled(FontAwesomeIcon)`
    font-size:40px;
    color: #FF5D54;
`
export const Section = styled.div`
    display: flex;
    flex-direction:column;
    overflow:auto;
    gap:15px;
    height:59%;
    background-color:#F4F4F4;
    width:100%;
    align-items:center;
    padding:15px;
`
export const SectionBottom = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:center;
    gap:15px;
    height:20%;
    box-shadow: 0px -3px 6px #00000029;
    width:100%;
    align-items:center;
    padding:0px 10px;
`
export const Product = styled.div`
    display: flex;
    flex-direction:row;
    height:auto;
    width:100%;
    align-items:center;
`
export const Div = styled.div<{width?:string}>`
    display: flex;
    flex-direction:column;
    align-items:center;
    gap:3px;
    justify-content:center;
    height:100%;
    width:${({width})=> width || '20%'};
`
export const SpanText = styled.div<{fSize?:string, align?:string, weight?:string}>`
    text-align:${({align})=> align || 'start'};
    width:100%;
    font-size:${({fSize})=> fSize || '13px'};
    font-weight:${({weight})=> weight || '0'};
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
    &:focus {
        border: 2px solid #FF5D54;
    }
    ::placeholder {
        color: #FF5D54;
}
`