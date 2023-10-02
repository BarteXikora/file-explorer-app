import styled from 'styled-components'

const StyledUsedSpace = styled.div`
    padding: ${(props) => props.theme.margins.sectionMedium};
    border-radius: ${(props) => props.theme.borderRadiuses.big};
    transition: ${(props) => props.theme.transition};
    cursor: pointer;

    &:hover {
        background-color: ${(props) => props.theme.colors.gray};
    }

    &:active {
        background-color: ${(props) => props.theme.colors.grayDarker};
    }

    h3 {
        font-size: ${(props) => props.theme.fontSizes.small};
        font-weight: normal;
        margin-bottom: ${(props) => props.theme.margins.small};
    }

    p {
        font-weight: bold;
        margin-top: ${(props) => props.theme.margins.small};
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