import styled from 'styled-components'

const StyledSearchInput = styled.form`
    border: 1px solid ${(props) => props.theme.colors.white};
    border-radius: ${(props) => props.theme.borderRadiuses.pill};
    display: flex;
    transition: ${(props) => props.theme.transition};

    &:hover, &:focus-within {
        background-color: ${(props) => props.theme.colors.gray};
    }

    input {
        width: 100%;
        background-color: transparent;
        border: none;
        padding: 0 ${(props) => props.theme.margins.medium};
        font-size: ${(props) => props.theme.fontSizes.default};
        color: ${(props) => props.theme.colors.white};

        &:focus {
            outline: none;
        }

        &::placeholder {
            color: ${(props) => props.theme.colors.grayLighter};
        }
    }

    @media (max-width: ${(props) => props.theme.screenSizes.medium}) {
        span {
            display: none;
        }   
    }
`

export default StyledSearchInput