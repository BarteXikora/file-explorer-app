import styled from 'styled-components'

const StyledContentSection = styled.main`
    padding: ${(props) => props.theme.margins.sectionBig};
    padding-top: calc(${(props) => props.theme.margins.medium} + 297px + 63.6px);
    padding-bottom: calc(${(props) => props.theme.margins.big} * 2.5);

    section {
        margin-bottom: ${(props) => props.theme.margins.big};
    }

    h1 {
        display: none;
    }

    h2 {
        font-size: ${(props) => props.theme.fontSizes.default};
        padding-left: ${(props) => props.theme.margins.small};
        margin: 0;
        margin-bottom: ${(props) => props.theme.margins.small};
    }

    .content {
        display: grid;
        grid-template-columns: repeat(5, minmax(0, 1fr));
        grid-gap: ${(props) => props.theme.margins.medium};
    }

    @media (max-width: ${(props) => props.theme.screenSizes.medium}) {
        padding-top: calc(${(props) => props.theme.margins.medium} + 187.6px + 63.6px);

        .content {
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }
    }

    @media (max-width: ${(props) => props.theme.screenSizes.small}) {
        padding: ${(props) => props.theme.margins.sectionBigMobile};
        padding-top: calc(${(props) => props.theme.margins.medium} + 140px);
        padding-bottom: calc(${(props) => props.theme.margins.big} * 2.5);

        h1 {
            display: flex;
            align-items: center;
            gap: ${(props) => props.theme.margins.small};
            max-width: 100%;
            overflow: hidden;
            white-space: nowrap;
            font-size: ${(props) => props.theme.fontSizes.title};
            color: ${(props) => props.theme.colors.grayLighter};
            margin-top: ${(props) => props.theme.margins.medium};
        }

        .content {
            grid-template-columns: repeat(1, minmax(0, 1fr));
        }
    }
`

export default StyledContentSection