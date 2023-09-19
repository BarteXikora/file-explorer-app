import styled from 'styled-components'

const StyledSideMenu = styled.div`
    background-color: ${(props) => props.theme.colors.black};
    color: ${(props) => props.theme.colors.white};
    width: 300px;
    height: 100%;
    display: flex;

    .logo {
        width: 180px;
        margin: 0 auto;
    }
`

export default StyledSideMenu