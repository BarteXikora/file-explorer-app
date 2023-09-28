import styled from 'styled-components'

const StyledTopBar = styled.section`
    display: flex;
    gap: ${(props) => props.theme.margins.XNormal};

    div {
        display: flex;
        gap: ${(props) => props.theme.margins.XNormal};
    }

    .full-width {
        width: 100%;
    }
`

export default StyledTopBar