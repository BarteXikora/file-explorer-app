import styled from 'styled-components'

const StyledSideMenu = styled.nav`
    background-color: ${(props) => props.theme.colors.black};
    color: ${(props) => props.theme.colors.white};
    width: 300px;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: ${(props) => props.theme.margins.sectionSmall};
    box-sizing: border-box;

    .logo {
        width: 180px;
        margin: 0 auto;
        margin-bottom: ${(props) => props.theme.margins.YBig};
        padding-right: 10px;
    }

    button {
        margin-bottom: ${(props) => props.theme.margins.YSmall};
    }

    h2 {
        font-size: ${(props) => props.theme.fontSizes.default};
        font-weight: bold;
        padding-left: 12px;
        margin-bottom: ${(props) => props.theme.margins.YSmall};
    }

    section {
        display: flex;
        flex-direction: column;

        &.padding-bottom {
            padding-bottom: ${(props) => props.theme.margins.YBig};;
        }

        &.full-height {
            margin-bottom: auto;
        }
    }
`

export default StyledSideMenu