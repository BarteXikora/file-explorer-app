import styled from 'styled-components'

const StyledLogo = styled.a`
    display: block;
    text-align: center;
    margin-bottom: ${(props) => props.theme.margins.big};
    border-radius: ${(props) => props.theme.borderRadiuses.big};
    cursor: pointer;
    transition: ${(props) => props.theme.transition};

    &:hover {
        background-color: ${(props) => props.theme.colors.gray};
    }

    &:active {
        background-color: ${(props) => props.theme.colors.grayDarker};
    }

    img {
        width: 180px;
        padding-right: 10px;
    }
`

export default StyledLogo