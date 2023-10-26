import styled from 'styled-components'

const StyledNotFoundPage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    .content {
        padding: ${(props) => props.theme.margins.big};
        border-radius: ${(props) => props.theme.borderRadiuses.big};
        background-color: ${(props) => props.theme.colors.black};
        margin-bottom: 100px;
        text-align: center;
    }

    h1 {
        font-size: ${(props) => props.theme.fontSizes.title};
        margin: 0;
    }

    p {
        margin: 0;
        color: ${(props) => props.theme.colors.grayLighter};

        b {
            color: ${(props) => props.theme.colors.white};
            display: inline-block;
            width: 80px;
            text-align: right;
        }
    }

    button {
        margin: ${(props) => props.theme.margins.big} 0;
    }

    @media (max-width: ${(props) => props.theme.screenSizes.small}) {
        display: block;

        .content {
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            padding: 0;
            border-radius: 0;
            padding-top: ${(props) => props.theme.margins.big};
        }
    }
`

export default StyledNotFoundPage