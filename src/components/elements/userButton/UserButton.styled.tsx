import styled from 'styled-components'
import Button from '../button/Button'

const StyledUserButton = styled(Button)`
    padding: 0;
    width: 51px;
    overflow: hidden;

    .user-picture {
        width: 100%;
        height: 100%;
        background-position: center;
        background-size: 100%;
        transition: ${(props) => props.theme.transition};
    }

    &:hover {
        .user-picture:not(.no-picture) {
            background-size: 120%;
        }
    }
`

export default StyledUserButton