import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    html, body, #root {
        height: 100%;
        margin: 0;
        padding: 0;
        font-family: 'Mukta', sans-serif;
        font-size: ${(props) => props.theme.fontSizes.default};
        background-color: ${(props) => props.theme.colors.grayDarker};
        color: ${(props) => props.theme.colors.white};
    }

    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-track {
        background: ${(props) => props.theme.colors.black};
    }

    ::-webkit-scrollbar-thumb {
        background: ${(props) => props.theme.colors.grayLighter};
        border-radius: ${(props) => props.theme.borderRadiuses.pill};

        &:hover {
            background-color: ${(props) => props.theme.colors.primary};
        }
    }
`

export default GlobalStyles