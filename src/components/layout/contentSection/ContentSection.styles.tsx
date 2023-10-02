import styled from 'styled-components'

const StyledContentSection = styled.main`
    padding: ${(props) => props.theme.margins.sectionBig};
    padding-bottom: calc(${(props) => props.theme.margins.big} * 2.5);

    section {
        margin-bottom: ${(props) => props.theme.margins.big};
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
`

export default StyledContentSection