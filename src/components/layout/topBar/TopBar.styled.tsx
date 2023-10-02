import styled from 'styled-components'

const StyledTopBar = styled.section`
    display: flex;
    padding: 0 ${(props) => props.theme.margins.big};
    margin-bottom: ${(props) => props.theme.margins.medium};

    div {
        display: flex;
        gap: ${(props) => props.theme.margins.small};
    }

    .full-width {
        width: 100%;
    }
`

export default StyledTopBar