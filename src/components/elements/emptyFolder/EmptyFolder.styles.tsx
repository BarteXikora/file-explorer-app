import styled from 'styled-components'

const StyledEmptyFolder = styled.div`
    display: inline-flex;
    align-items: start;
    padding: ${(props) => props.theme.margins.sectionBig};
    background-color: ${(props) => props.theme.colors.gray};
    border-radius: ${(props) => props.theme.borderRadiuses.big};
    box-sizing: border-box;

    .info-box {
        margin-left: ${(props) => props.theme.margins.medium};
        max-width: 75%;
    }

    h3 {
        font-size: ${(props) => props.theme.fontSizes.title};
        font-weight: bold;
        margin: 0;
    }

    p {
        margin-top:0;
    }

    button {
        margin-right: ${(props) => props.theme.margins.small};
        margin-top: ${(props) => props.theme.margins.small};
    }

    @media (max-width: ${(props) => props.theme.screenSizes.medium}) {
        max-width: unset;
    }

    @media (max-width: ${(props) => props.theme.screenSizes.small}) {
        display: flex;
        position: relative;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: ${(props) => props.theme.margins.sectionBigMobile};
        width: 100%;

        .info-box {
            margin-left: 0;
        }

        p {
            display: none;
        }

        button {
            margin-right: 0;
        }

        .button-back {
            position: absolute;
            top: 0;
            left: ${(props) => props.theme.margins.small}; 
        }
    }
`

export default StyledEmptyFolder