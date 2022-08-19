import styled from 'styled-components'

export const Container = styled.div`
    display:grid;
    grid-template-columns: 45% 1fr;
    width:100vw;
    height:100vh;
    background-color:#fff;
`
export const SectionLeft = styled.div`
    display:flex;
    position:relative;
    height:100%;
    padding:1rem 0rem 0rem 0rem;
    width:100%;
    justify-content:center;
    align-items:flex-start;
    overflow:hidden;
`
export const Body = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
`
export const ContentImg = styled.div`
    display:flex;
    height:100%;
    width:100%;
    justify-content:center;
    align-items:flex-start;
    background-position:bottom;
    background-image: url("/auth/wave.png");
    background-size: contain;
    background-repeat:no-repeat;
`
export const SectionRight = styled.div`
    display:flex;
    justify-content:flex-start;
    align-items:center;
    flex-direction:column;
    background: transparent linear-gradient(180deg, #FF885C 0%, #FF5353 100%) 0% 0% no-repeat padding-box;
`
export const Logo = styled.img`
    object-fit:contain;
    margin-right:3rem;
    width:59%;
`
export const LogoInfo = styled.img`
    object-fit:contain;
    position:absolute;
    width:40%;
    top:2rem;
`
export const PersonInfo = styled.img`
    object-fit:contain;
    position:absolute;
    bottom:-5rem;
    width:85%;
`
export const SpanHeader = styled.span<{fSize?:string, fWeight?:string}>`
    width:100%;
    font-size:${({fSize}) => fSize || '20px'};
    font-weight:${({fWeight}) => fWeight || '20px'};
    text-align:center;
    color: #FFFFFF;
`
export const BoxContent = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    width:50%;
    padding:5rem 0rem;
    gap:20px;
    margin:0px auto;
`