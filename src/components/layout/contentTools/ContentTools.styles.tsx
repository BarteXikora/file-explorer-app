import styled from 'styled-components'

const StyledContentTools = styled.div`
    position: fixed;
    width: 100%;
    box-sizing: border-box;
    padding: ${(props) => props.theme.margins.small + ' ' + props.theme.margins.big};
    top: 309px;
    background-color: ${(props) => props.theme.colors.grayDarker};
`

export default StyledContentTools