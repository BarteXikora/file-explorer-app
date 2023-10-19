import styled from 'styled-components'

const StyledScreenSize = styled.div`
    .size-box {
        position: fixed;
        z-index: 5000;
        bottom: 15px;
        right: 15px;
        padding: 10px 20px;
        background-color: black;
        border: 1px solid white;
        border-radius: 15px;
        color: white;
        display: none;
        font-weight: bold;
    }

    .large { display: block; background-color: #861200; }

    @media (max-width: ${(props) => props.theme.screenSizes.big}) {
        .large { display: none; }

        .big { display: block; background-color: #a17c00; }
    }

    @media (max-width: ${(props) => props.theme.screenSizes.medium}) {
        .big { display: none; }

        .medium { display: block; background-color: #006a45; }
    }

    @media (max-width: ${(props) => props.theme.screenSizes.small}) {
        .medium { display: none; }

        .small { display: block; background-color: #003289; }
    }
`
export default StyledScreenSize