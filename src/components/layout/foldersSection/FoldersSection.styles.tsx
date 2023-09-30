import styled from 'styled-components'

const StyledFoldersSection = styled.div`
    h2 {
        font-size: ${(props) => props.theme.fontSizes.default};
        padding-left: ${(props) => props.theme.margins.XNormal};
        margin: 0;
        margin-bottom: ${(props) => props.theme.margins.YSmall};
    }

    .content {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        grid-gap: ${(props) => props.theme.margins.XNormal};
    }
`

export default StyledFoldersSection