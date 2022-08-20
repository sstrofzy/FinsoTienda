import styled from 'styled-components'

export const Container = styled.button<{isActive?:boolean, bgColor?:string}>`
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:${({bgColor}) => bgColor || '#FF5D54'};
    width:100%;
    height:48px;
    border:none;
    cursor: pointer;
    color:#fff;
    padding:15px;
    font-size:15px;
    border-radius:25px;
    box-shadow: 0px 3px 6px #00000029;
`