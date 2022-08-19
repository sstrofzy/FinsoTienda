import styled from 'styled-components'

// Container
export const Container = styled.div`
    height: 100vh;
    width: 100vw;
`
export const Main = styled.div`
    position:relative;
    display: grid;
    height: 100vh;
    width: 100vw;
    transition: .5s;
    grid-template-areas: 
    "header header" 
    "aside children";
    grid-template-rows: minmax(min-content, 1px) 1fr;
    grid-template-columns: 184px 1fr;
`
export const ChildrenBox = styled.div`
    grid-area: children;
    overflow:auto;
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:#EFEFEF;
`
