import styled from 'styled-components'

export const Header = styled.header<{active?:boolean}>`
    grid-area: header;
    width: 100%;
    display: flex;
    padding-left:184px;
    padding-right:${({active})=> active ? '184px' : '0px' };
    height:120px;
    flex-direction: row;
    background: transparent linear-gradient(180deg, #FF885C 0%, #FF5353 100%) 0% 0% no-repeat padding-box;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 3px 6px #00000029;
`
export const Menu = styled.div`
    display: flex;
    flex-direction:column;
    gap:10px;
    padding:0px 5rem;
    width:100%;
    margin:auto;
    align-items:center;
`
export const TitlePage = styled.h1`
    width:100%;
    margin:5px;
    color:#fff;
    text-align:center;
`
export const Border = styled.div`
    width:100%;
    height:1px;
    text-align:center;
    border-bottom: 2px dashed #d2d2d2;
`