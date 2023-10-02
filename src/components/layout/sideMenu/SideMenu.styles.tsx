import styled from 'styled-components'

const StyledSideMenu = styled.nav`
    position: fixed;
    background-color: ${(props) => props.theme.colors.black};
    color: ${(props) => props.theme.colors.white};
    width: 300px;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: ${(props) => props.theme.margins.medium};
    box-sizing: border-box;

    button:not(:last-of-type) {
        margin-bottom: ${(props) => props.theme.margins.small};
    }

    h2 {
        font-size: ${(props) => props.theme.fontSizes.default};
        font-weight: bold;
        padding-left: 12px;
        margin-bottom: ${(props) => props.theme.margins.small};
    }

    section {
        display: flex;
        flex-direction: column;

        &.padding-bottom {
            padding-bottom: ${(props) => props.theme.margins.big};
        }

        &.full-height {
            margin-bottom: auto;
        }
    }
`

export default StyledSideMenu