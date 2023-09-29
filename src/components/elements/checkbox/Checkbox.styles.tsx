import styled from 'styled-components'

const StyledCheckbox = styled.div`
    display: flex;
    gap: ${(props) => props.theme.margins.XNormal};
    cursor: pointer;

    label {
        transition: ${(props) => props.theme.transition};
        cursor: pointer;
    }

    &:hover { 
        .check-mark {
            background-color: ${(props) => props.theme.colors.grayLighter};
        }

        label {
            color: ${(props) => props.theme.colors.primaryLighter};
        }
    }

    .check-mark {
        position: relative;
        display: inline-block;
        width: 22px;
        height: 22px;
        border: 1px solid ${(props) => props.theme.colors.white};
        border-radius: ${(props) => props.theme.borderRadiuses.small};
        transition: ${(props) => props.theme.transition};
    }

    input {
        position: relative;
        opacity: 0;
        width: 0;
        display: none;

        &:checked + .check-mark {
            background-color: ${(props) => props.theme.colors.white};

            &::after {
                position: absolute;
                content: '';
                width: 4px;
                height: 10px;
                transform: rotateZ(45deg);
                border: 6px solid ${(props) => props.theme.colors.primary};
                border-top: none;
                border-left: none;
                top: 2px;
                left: 7px;
                transition: ${(props) => props.theme.transition};
            }
        }
    }
`

export default StyledCheckbox