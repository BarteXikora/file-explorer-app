import styled from 'styled-components'

const StyledContentTools = styled.section`
    box-sizing: border-box;
    padding: ${(props) => props.theme.margins.small + ' ' + props.theme.margins.big};
    background-color: ${(props) => props.theme.colors.grayDarker};
    display: flex;
    align-items: center;
    gap: ${(props) => props.theme.margins.small};
    z-index: 1100;

    h2 {
        display: block;
        width: 25%;
        font-size: ${(props) => props.theme.fontSizes.title};
        margin: 0;
        color: ${(props) => props.theme.colors.grayLighter};
        white-space: nowrap;
        overflow: hidden;
    }

    .separator {
        margin: 0 ${(props) => props.theme.margins.small};
        height: 25px;
        border: 1px solid ${(props) => props.theme.colors.white};
    }
`

export default StyledContentTools