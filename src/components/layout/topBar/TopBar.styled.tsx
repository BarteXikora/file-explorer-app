import styled from 'styled-components'

const StyledTopBar = styled.section`
    display: flex;
    gap: ${(props) => props.theme.margins.XNormal};
    padding: 0 ${(props) => props.theme.margins.XBig};
    margin-bottom: ${(props) => props.theme.margins.YNormal};

    div {
        display: flex;
        gap: ${(props) => props.theme.margins.XNormal};
    }

    .full-width {
        width: 100%;
    }
`

export default StyledTopBar