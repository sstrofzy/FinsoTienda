import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    height:100%;
`
export const Content = styled.div`
    display:grid;
    justify-content:flex-start;
    align-items:flex-start;
    padding:25px;
    gap:15px;
    grid-template-columns: repeat(5, 1fr);
    width:100%;
    height:100%;
` 
export const Card = styled.div`
    display:flex;
    flex-direction:column;
    cursor: pointer;
    border-radius:16px;
    box-shadow: 0px 3px 6px #00000029;
    background-color:#fff;
    gap:15px;
    width:100%;
    overflow:hidden;
    height:180px;
` 
export const Section = styled.div<{height?:string, bgColor?:string}>`
    display:flex;
    background-color:${({bgColor}) => bgColor || '#FF5D54'};
    justify-content:center;
    align-items:center;
    width:100%;
    height:${({height}) => height || '25%'};
` 
export const TitleCard = styled.span`
    width:100%;
    font-size:14px;
    color:#fff;
    text-align:center;
` 