import styled from 'styled-components'

const StyledUsedSpace = styled.div`
    margin: 0 20px;

    h3 {
        font-size: ${(props) => props.theme.fontSizes.small};
        font-weight: normal;
        margin-bottom: ${(props) => props.theme.margins.YSmall};
    }

    p {
        font-weight: bold;
        margin-top: ${(props) => props.theme.margins.YSmall};
    }

    .progress-bar {
        width: 100%;
        height: 8px;
        background-color: ${(props) => props.theme.colors.white};
        border-radius: 100px;
    }

    .current-progress {
        height: 100%;
        max-width: 100%;
        background-color: ${(props) => props.theme.colors.primary};
        border-radius: 100px;
    }
`

export default StyledUsedSpace