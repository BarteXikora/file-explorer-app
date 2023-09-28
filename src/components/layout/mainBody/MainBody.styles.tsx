import styled from 'styled-components'

const StyledMainBody = styled.div`
    margin-left: 300px;
    padding: ${(props) => props.theme.margins.sectionBig};

    .__test {
        background-color: red;
    }
`

export default StyledMainBody