import styled from 'styled-components'

const StyledProcessPill = styled.div`
    position: fixed;
    bottom: ${(props) => props.theme.margins.medium};
    left: calc(${(props) => props.theme.margins.big} + 300px);
    padding: ${(props) => props.theme.margins.sectionMedium};
    background-color: ${(props) => props.theme.colors.black};
    border-radius: ${(props) => props.theme.borderRadiuses.pill};
    color: ${(props) => props.theme.colors.grayLighter};
    display: flex;
    align-items: center;
    gap: ${(props) => props.theme.margins.small};
    cursor: pointer;
    transition: ${(props) => props.theme.transition};
    border: 1px solid ${(props) => props.theme.colors.black};
    z-index: 1000;

    &:hover {
        border-color: ${(props) => props.theme.colors.white};
    }

    @media (max-width: ${(props) => props.theme.screenSizes.big}) {
        left: ${(props) => props.theme.margins.big};
    }

    @media (max-width: ${(props) => props.theme.screenSizes.small}) {
        bottom: ${(props) => props.theme.margins.small};
        left: ${(props) => props.theme.margins.small};
        padding: ${(props) => props.theme.margins.sectionSmall};
    }
`
export default StyledProcessPill