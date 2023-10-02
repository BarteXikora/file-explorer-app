import styled from 'styled-components'

const StyledHeader = styled.header`
    background-color: ${(props) => props.theme.colors.gray};
    padding: ${(props) => props.theme.margins.sectionBig};

    .functions-box {
        display: flex;
        gap: ${(props) => props.theme.margins.small};
        align-items: center;
    }

    .separator {
        margin: 0 ${(props) => props.theme.margins.small};
        height: 25px;
        border: 1px solid ${(props) => props.theme.colors.white};
    }

    .selected-operations {
        display: flex;
        align-items: center;

        .separator {
            margin-right: ${(props) => props.theme.margins.medium};
        }
    }
`

export default StyledHeader