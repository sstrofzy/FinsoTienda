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
    grid-template-columns: repeat(4, 1fr);
    width:100%;
` 