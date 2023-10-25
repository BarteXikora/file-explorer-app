import styled from 'styled-components'
import StyledEmptyFolder from '../emptyFolder/EmptyFolder.styles'

const StyledWrongPath = styled(StyledEmptyFolder)`
    align-items: center;

    h3 {
        color: ${(props) => props.theme.colors.wrong};
    }
`

export default StyledWrongPath