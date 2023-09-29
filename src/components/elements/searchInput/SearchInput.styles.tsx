import styled from 'styled-components'

const StyledSearchInput = styled.form`
    border: 1px solid ${(props) => props.theme.colors.white};
    border-radius: 1000px;
    display: flex;
    transition: ${(props) => props.theme.transition};

    &:hover, &:focus-within {
        background-color: ${(props) => props.theme.colors.gray};
    }

    input {
        width: 100%;
        border-radius: 1000px 0 0 1000px;
        background-color: transparent;
        border: none;
        padding: 0 ${(props) => props.theme.margins.XNormal};
        font-size: ${(props) => props.theme.fontSizes.default};
        color: ${(props) => props.theme.colors.white};

        &:focus {
            outline: none;
        }

        &::placeholder {
            color: ${(props) => props.theme.colors.grayLighter};
        }
    }
`

export default StyledSearchInput