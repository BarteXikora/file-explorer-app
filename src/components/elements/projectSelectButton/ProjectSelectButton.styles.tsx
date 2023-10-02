import styled from 'styled-components'
import StyledButton from '../../ui/button/Button.styles'

const StyledProjectSelectButton = styled(StyledButton)`
    position: relative;
    border: 1px solid ${(props) => props.theme.colors.white};
    padding: 0;

    &:hover {
        .project-picture {
            background-color: ${(props) => props.theme.colors.primaryLighter};
        }
    }

    &::after {
        position: absolute;
        content: '';
        width: 12px;
        height: 12px;
        right: 20px;
        transform: rotateZ(45deg);
        border-top: 2px solid ${(props) => props.theme.colors.white};
        border-right: 2px solid ${(props) => props.theme.colors.white};
        border-radius: 0 ${(props) => props.theme.borderRadiuses.small} 0 0;
    }

    .project-picture {
        padding: 25px;
        background-color: ${(props) => props.theme.colors.primary};
        border: 1px solid ${(props) => props.theme.colors.white};
        border-radius: 50%;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        margin-right: 5px;
        transition: all ease-in-out .2s;
    }
`

export default StyledProjectSelectButton