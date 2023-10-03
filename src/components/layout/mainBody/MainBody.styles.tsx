import styled from 'styled-components'

const StyledMainBody = styled.div`
    margin-left: 300px;

    @media (max-width: ${(props) => props.theme.screenSizes.big}) {
        margin-left: 0;
    }
`

export default StyledMainBody