import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Mukta:wght@400;700&display=swap');

    html, body, #root {
        height: 100%;
        margin: 0;
        padding: 0;
        font-family: 'Mukta', sans-serif;
        font-size: ${(props) => props.theme.fontSizes.default};
    }

`

export default GlobalStyles