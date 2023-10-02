import styled from 'styled-components'

const StyledFolder = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    background-color: ${(props) => props.theme.colors.gray};
    padding: ${(props) => props.theme.margins.sectionMediumImg};
    padding-right: 0;
    white-space: nowrap;
    border-radius: 1000px;
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
        border-radius: 1000px;
    }

    img {
        margin-right: ${(props) => props.theme.margins.small};
    }

    .name {
        overflow: hidden;
    }

    button {
        position: absolute;
        padding: ${(props) => props.theme.margins.small};
        height: 100%;
        margin-left: auto;
        right: 0;
        z-index: 10;

        img {
            margin: 0;
        }
    }

    .star {
        position: absolute;
        z-index: 100;
        top: -18px;
        right: 35px;
    }
`
export default StyledFolder