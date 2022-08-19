import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

type TContainerAside = {
    show?: boolean
}
export const ContainerAside = styled.div<TContainerAside>`
    position:absolute;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content:space-between;
    height:100%;
    transition: .3s;
    width: ${ ({ show }) => (show ? '184px' : '75px') };
`
export const TopSection = styled.div`
    display: flex;
    position:relative;
    width:100%;
    height:85px;
    flex-direction: column;
    justify-content: flex-end ;
    align-items:flex-start;
`
export const Section = styled.div`
    display: flex;
    width:100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items:center;
    background-color:#fff;
    border-radius: 0px 15px 0px 0px;
    box-shadow: 6px -3px 6px #00000029;
    overflow-y:auto;
    height:100%;
    gap:10px;
    padding:1em 0.5em 1em 0em;
`
export const SectionImg = styled.div`
    display: flex;
    position:relative;
    border:1px solid #d2d2d2;
    min-height:140px;
    max-height:140px;
    width:85%;
    flex-direction: column;
    justify-content: flex-start;
    align-items:center;
    margin-bottom:20px;
`
export const NavLink = styled.div<{show?:boolean, isActive?:any}>`
    display: flex;
    width: 100%;
    align-items: center;
    background-color:${({isActive}) => isActive ?  '#FF5D54' : '#fff'};
    border-radius: 0px 20px 20px 0px;
    justify-content: center;
    gap: ${ ({ show }) => (show ? '15px' : '0') };
    transition: .3s;
    color:#fff;
    height:35px;
    padding:0px 12px 0px 1em;
    cursor: pointer;
`
export const Icon = styled(FontAwesomeIcon)<any>`
   color:${({isActive}) => isActive ?  '#fff' : '#FF5D54'};
`
export const ImgProfile = styled.img`
    object-fit:contain;
    width:150px;
`
export const TextNav = styled.span<any>`
    display: flex;
    color:${({isActive}) => isActive ?  '#fff' : '#FF5D54'};
    justify-content:flex-start;
    align-items:center;
    white-space: nowrap;
    height:100%;
    width: ${({ showAside }) => showAside ? '100%' : '0px'};
    overflow: hidden;
    visibility:${({ showAside }) => showAside ? 'visible' : 'hidden'};
    transition: .3s all ease-in;
`
export const Div = styled.div`
    display: flex;
    justify-content:center;
    cursor:pointer;
    align-items:center;
    position:absolute;
    top:-10px;
    border-radius:50%;
    right:-10px;
    background-color:#FF5D54;
    width:35px;
    height:35px;
`
export const ContentLogo = styled.div`
    display: flex;
    position:absolute;
    width:164px;
    height:auto;
    min-height:68px;
    border-radius: 0px 24px 0px 0px;
    box-shadow: 6px 3px 6px #00000029;
    justify-content:center;
    cursor:pointer;
    align-items:center;
    background: #FF5D54;
`
export const Logo = styled.img`
    object-fit:contain;
    width:60px;
    margin-right:1rem;
`
export const ContentOptions = styled.div`
    display: flex;
    width:100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items:center;
    background-color:#fff;
    overflow-y:auto;
    height:80%;
    gap:10px;
`
export const SectionBottom = styled.div`
    display: flex;
    flex-direction:column;
    gap:10px;
    width:100%;
    align-items:center;
    padding:0px 10px;
`