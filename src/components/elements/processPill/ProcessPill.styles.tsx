import styled from 'styled-components'

const StyledProcessPill = styled.div`
    position: fixed;
    bottom: ${(props) => props.theme.margins.YBig};
    left: calc(${(props) => props.theme.margins.XBig} + 300px);
    padding: ${(props) => props.theme.margins.YSmall} ${(props) => props.theme.margins.XBig};
    background-color: ${(props) => props.theme.colors.black};
    border-radius: 1000px;
    color: ${(props) => props.theme.colors.grayLighter};
    display: flex;
    align-items: center;
    gap: ${(props) => props.theme.margins.XSmall};
    cursor: pointer;
    transition: ${(props) => props.theme.transition};
    border: 1px solid ${(props) => props.theme.colors.black};

    &:hover {
        border-color: ${(props) => props.theme.colors.white};
    }
`
export default StyledProcessPill