import styled from 'styled-components'

const StyledFolder = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    background-color: ${(props) => props.theme.colors.gray};
    padding: ${(props) => props.theme.margins.YSmall} ${(props) => props.theme.margins.XNormal};
    padding-right: 0;
    white-space: nowrap;
    border-radius: 1000px;
    overflow: hidden;
    transition: ${(props) => props.theme.transition};
    cursor: pointer;

    &:hover {
        background-color: ${(props) => props.theme.colors.grayLighter};

        &::after {
            background-color: ${(props) => props.theme.colors.grayLighter};
        }
    }

    &::after {
        position: absolute;
        content: '';
        height: 100%;
        width: 50px;
        background-color: ${(props) => props.theme.colors.gray};
        right: 0;
        z-index: 0;
        transition: ${(props) => props.theme.transition};
    }

    img {
        margin-right: ${(props) => props.theme.margins.XSmall};
    }

    button {
        position: absolute;
        padding: ${(props) => props.theme.margins.YSmall};
        height: 100%;
        margin-left: auto;
        right: 0;
        z-index: 10;
    }
`
export default StyledFolder