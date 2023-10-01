import styled from 'styled-components'

const StyledFile = styled.div`
    background-color: ${(props) => props.theme.colors.gray};
    border-radius: ${(props) => props.theme.borderRadiuses.big};
    transition: ${(props) => props.theme.transition};
    cursor: pointer;

    &:hover {
        background-color: ${(props) => props.theme.colors.grayLighter};

        .preview-image {
            background-size: auto 110% !important;
        }

        .label::after {
            background-color: ${(props) => props.theme.colors.grayLighter};
        }
    }

    .preview {
        position: relative;
        aspect-ratio: 2 / 1;
        background-position: center;
        background-size: auto 85%;
        background-repeat: no-repeat;
        border-radius: ${(props) => props.theme.borderRadiuses.big} ${(props) => props.theme.borderRadiuses.big} 0 0;
        transition: ${(props) => props.theme.transition};

        &.preview-image {
            background-size: auto 100%;
        }
    }

    .extension {
        position: absolute;
        top: ${(props) => props.theme.margins.YSmall};
        right: ${(props) => props.theme.margins.XNormal};
        background-color: ${(props) => props.theme.colors.black};
        color: ${(props) => props.theme.colors.white};
        border: 2px solid ${(props) => props.theme.colors.white};
        padding: 0 ${(props) => props.theme.margins.XNormal};
        border-radius: 1000px;
        font-weight: bold;
    }

    .label {
        position: relative;
        display: flex;
        align-items: center;
        padding: ${(props) => props.theme.margins.YSmall} ${(props) => props.theme.margins.XNormal};
        padding-right: 0;

        span {
            white-space: nowrap;
            overflow: hidden;
        }

        button {
            position: absolute;
            padding: ${(props) => props.theme.margins.YSmall};
            height: 100%;
            margin-left: auto;
            right: 0;
            z-index: 10;
            border-radius: ${(props) => props.theme.borderRadiuses.big};
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
    }
`

export default StyledFile