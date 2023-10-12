import styled from 'styled-components'

const StyledHeader = styled.header`
    position: fixed;
    box-sizing: border-box;
    width: 100%;
    z-index: 800;

    .header {
        display: flex;
        gap: ${(props) => props.theme.margins.small};
        align-items: center;
        flex-wrap: wrap;
        background-color: ${(props) => props.theme.colors.gray};
        padding: ${(props) => props.theme.margins.sectionBig};
        padding-top: calc(${(props) => props.theme.margins.medium} + 98px);
    }

    &.header-rolled {
        .path-box {
            flex-basis: 0;
            margin-right: ${(props) => props.theme.margins.small};
        }
    }

    .path-box {
        flex-basis: 100%;
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
        .header {
            padding: ${(props) => props.theme.margins.sectionBigMobile};
        padding-top: calc(${(props) => props.theme.margins.medium} + 56px);
        }

        .buttons-box button span {
            display: none;
        }
    }
`

export default StyledHeader