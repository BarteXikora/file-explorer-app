import styled from 'styled-components'

const StyledHeader = styled.header`
    display: flex;
    gap: ${(props) => props.theme.margins.small};
    align-items: center;
    flex-wrap: wrap;
    background-color: ${(props) => props.theme.colors.gray};
    padding: ${(props) => props.theme.margins.sectionBig};
    padding-top: calc(${(props) => props.theme.margins.medium} + 98px);

    .path-box {
        flex-basis: 100%;
    }

    .separator {
        margin: 0 ${(props) => props.theme.margins.small};
        height: 25px;
        border: 1px solid ${(props) => props.theme.colors.white};
    }

    .buttons-box {
        display: flex;
        align-items: center;
        gap: ${(props) => props.theme.margins.small};
    }

    @media (max-width: ${(props) => props.theme.screenSizes.medium}) {
        .path-box {
            flex-basis: 0;
        }

        .buttons-box {
            margin-left: auto;
        }
    }

    @media (max-width: ${(props) => props.theme.screenSizes.small}) {
        .buttons-box button span {
            display: none;
        }
    }
`

export default StyledHeader