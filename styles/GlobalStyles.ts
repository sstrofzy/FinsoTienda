import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
        font-family: 'Roboto' !important;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }


    button{
        font-weight: 600 !important;
    }

    th {
        font-weight: 600 !important;
        white-space: normal ;
    }

    div {
        font-weight: 500 !important;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    }

    /* Ant Modal Global Style */

    .ant-modal-title {
        font-weight: bold !important;
        font-size: 22px !important;
    }

    .ant-modal-header {
        background-color: #FCFCFF;
        padding: 22px 24px;
    }

    .ant-modal-close {
        top: 10px;
        right: 13px;
    }

    .smooth-dnd-container.horizontal > .smooth-dnd-draggable-wrapper > section   {
        width: 99% !important;
    }

    .smooth-dnd-container.horizontal > .smooth-dnd-draggable-wrapper > section > div  {
        width: 100% !important;
    }

    .smooth-dnd-container.horizontal > .smooth-dnd-draggable-wrapper  {
        width: 20%;
    }

`

export default GlobalStyle
