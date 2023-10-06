import styled from 'styled-components'

const StyledDropdown = styled.div`
    position: relative;

    button {
        position: relative;
        padding-right: calc(${(props) => props.theme.margins.medium} + 17px);

        &::after {
           position: absolute;
           content: '';
           width: 12px;
           height: 12px;
           top: 12px;
           right: ${(props) => props.theme.margins.small};
           transform: rotateZ(135deg);
           border-top: 2px solid ${(props) => props.theme.colors.white};
           border-right: 2px solid ${(props) => props.theme.colors.white};
           border-radius: 0 ${(props) => props.theme.borderRadiuses.small} 0 0;
       }
    }

    .dropdown-box {
        display: none;

        &.shown {
            display: block;
            position: absolute;
            background-color: ${(props) => props.theme.colors.black};
            padding: ${(props) => props.theme.margins.sectionMedium};
            border: 1px solid ${(props) => props.theme.colors.white};
            border-radius: ${(props) => props.theme.borderRadiuses.big};
            top: 45px;
            z-index: 1000;
        }
    }
`

export default StyledDropdown