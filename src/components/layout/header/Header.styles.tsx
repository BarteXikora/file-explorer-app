import styled from 'styled-components'

const StyledHeader = styled.header`
    background-color: ${(props) => props.theme.colors.gray};
    padding: ${(props) => props.theme.margins.sectionBig};

    .path-box {
        padding: ${(props) => props.theme.margins.YSmall} 0;
        padding-left: 25px;
        position: relative;
        font-weight: bold;

        &::after {
            position: absolute;
            content: '';
            width: 9px;
            height: 100%;
            background-color: ${(props) => props.theme.colors.primary};
            top: 0;
            left: 0;
            border-radius: 1000px;
        }

        h1 {
            margin: 0;
            font-size: ${(props) => props.theme.fontSizes.title};
            cursor: default;
        }

        a {
            color: ${(props) => props.theme.colors.white};
            text-decoration: none;
            transition: ${(props) => props.theme.transition};

            &:hover {
                color: ${(props) => props.theme.colors.primaryLighter};
            }
        }

        .arrow {
            position: relative;
            display: inline-block;
            width: 30px;

            &::after {
                position: absolute;
                content: '';
                width: 12px;
                height: 12px;
                top: -14px;
                left: 5px;
                transform: rotateZ(45deg);
                border-top: 2px solid ${(props) => props.theme.colors.white};
                border-right: 2px solid ${(props) => props.theme.colors.white};
                border-radius: 0 4px 0 0;
            }
        }
    }
`

export default StyledHeader