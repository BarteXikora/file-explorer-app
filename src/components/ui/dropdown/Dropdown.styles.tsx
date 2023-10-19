import styled from 'styled-components'

const StyledDropdown = styled.div`
    position: relative;

    .button-dropdown {
        position: relative;
        padding-right: calc(${(props) => props.theme.margins.medium} + 17px);

        &::after {
           position: absolute;
           content: '';
           width: 12px;
           height: 12px;
           margin-bottom: 5px;
           right: ${(props) => props.theme.margins.small};
           transform: rotateZ(135deg);
           border-top: 2px solid ${(props) => props.theme.colors.white};
           border-right: 2px solid ${(props) => props.theme.colors.white};
           border-radius: 0 ${(props) => props.theme.borderRadiuses.small} 0 0;
       }
    }

    .dropdown-box {
        display: none !important;

        &.shown {
            display: block !important;
            position: absolute;
            background-color: ${(props) => props.theme.colors.black};
            padding: ${(props) => props.theme.margins.sectionMedium};
            border: 1px solid ${(props) => props.theme.colors.white};
            border-radius: ${(props) => props.theme.borderRadiuses.big};
            top: 45px;
            left: 0;
            z-index: 1000;
        }

        &.dropdown-right {
            left: unset;
            right: 0;
        }
    }
`

export default StyledDropdown