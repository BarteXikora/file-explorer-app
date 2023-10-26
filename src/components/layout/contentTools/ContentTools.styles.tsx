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
            display: flex;
            align-items: center;
            font-size: ${(props) => props.theme.fontSizes.title};
            margin: 0;
            width: 400px;
            overflow: hidden;
        }

        .button-back {
            padding: 0 ${(props) => props.theme.margins.small} 0 0;

            &:hover {
                background-color: ${(props) => props.theme.colors.gray};
            }
        }

        .folder-icon {
            margin-right: ${(props) => props.theme.margins.small};
        }
    }

    .separator {
        margin: 0 ${(props) => props.theme.margins.small};
        height: 25px;
        border: 1px solid ${(props) => props.theme.colors.white};
    }

    .tools-dropdown {
        display: none;
    }

    .tools-buttons {
        display: none;

        &.shown {
            display: flex;
        }
    }

    @media (max-width: ${(props) => props.theme.screenSizes.medium}) {
        .folder-name:has(~ .tools-buttons.shown) {
            width: 0;
            padding: 0;
            margin: 0;

            .separator {
                display: none;
            }
        }

        .folder-name h2 {
            width: 350px;
        }
    }

    @media (max-width: ${(props) => props.theme.screenSizes.small}) {
        padding: ${(props) => props.theme.margins.small};

        &:not(.section-shown) {
            display: none;
        }

        .tools-dropdown {
            display: block;
            margin-left: auto;

            button {
                white-space: nowrap;
            }
        }

        .tools-buttons.shown {
            display: none;
        }
    }
`

export default StyledContentTools