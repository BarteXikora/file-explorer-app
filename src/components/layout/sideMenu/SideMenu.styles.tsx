import styled from 'styled-components'

const StyledSideMenu = styled.div`
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
`

export default StyledSideMenu