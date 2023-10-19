import styled from 'styled-components'

const StyledContentTools = styled.section`
    padding: ${(props) => props.theme.margins.small + ' ' + props.theme.margins.big};
    background-color: ${(props) => props.theme.colors.grayDarker};
    display: flex;
    align-items: center;
    gap: ${(props) => props.theme.margins.small};
    z-index: 1100;

    .folder-name {
        display: flex;
        gap: ${(props) => props.theme.margins.small};
        justify-content: space-between;
        align-items: center;
        color: ${(props) => props.theme.colors.grayLighter};
        white-space: nowrap;

        h2 {
            font-size: ${(props) => props.theme.fontSizes.title};
            margin: 0;
            width: 400px;
            overflow: hidden;
        }
    }

    .separator {
        margin: 0 ${(props) => props.theme.margins.small};
        height: 25px;
        border: 1px solid ${(props) => props.theme.colors.white};
    }

    .tools-buttons {
        display: none;

        &.shown {
            display: flex;
        }
    }

    @media (max-width: ${(props) => props.theme.screenSizes.medium}) {
        .folder-name:has(~ .tools-buttons.shown) {
            display: none;
        }

        .folder-name h2 {
            width: 350px;
        }
    }

    @media (max-width: ${(props) => props.theme.screenSizes.small}) {
       display: none;

    }
`

export default StyledContentTools