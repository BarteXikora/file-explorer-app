import styled from 'styled-components'

const StyledTopBar = styled.section`
    display: flex;
    position: fixed;
    width: 100%;
    left: 0;
    box-sizing: border-box;
    padding: ${(props) => props.theme.margins.sectionBig};
    padding-left: calc(${(props) => props.theme.margins.big} + 300px);
    margin-bottom: ${(props) => props.theme.margins.medium};
    background-color: ${(props) => props.theme.colors.grayDarker};
    z-index: 1000;

    .hamburger {
        display: none;
    }

    div {
        display: flex;
        gap: ${(props) => props.theme.margins.small};
    }

    .full-width {
        width: 100%;
        margin-right: ${(props) => props.theme.margins.big};
    }

    @media (max-width: ${(props) => props.theme.screenSizes.big}) {
        padding-left: ${(props) => props.theme.margins.big};

        .hamburger {
            display: flex;
        }
    }
`

export default StyledTopBar