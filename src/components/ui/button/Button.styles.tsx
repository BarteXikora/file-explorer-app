import styled from 'styled-components'

type StyledButtonProps = {
    variant?: 'primary' | 'secondary' | 'tertiary' | 'menu'
    size?: 'big' | 'small'
}

const StyledButton = styled.button<StyledButtonProps>`
    background-color: ${(props) => (props.variant === 'secondary' || props.variant === 'tertiary') ?
        'transparent'
        :
        props.variant === 'menu' ?
            props.theme.colors.primaryDarker
            :
            props.theme.colors.primary
    };

    padding: ${(props) => props.size === 'small' ? props.theme.margins.sectionSmallImg : props.theme.margins.sectionMediumImg};

    border: 1px solid ${(props) => (props.variant === 'tertiary' || props.variant === 'menu') ?
        'transparent'
        :
        props.theme.colors.white
    };

    border-radius: ${(props) => props.theme.borderRadiuses.pill};
    color: ${(props) => props.theme.colors.white};
    font-size: ${(props) => props.theme.fontSizes.default};
    text-align: left;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    line-height: 25px;
    cursor: pointer;
    transition: all ease-in-out .2s;

    &:hover {
        background-color: ${(props) => (props.variant === 'secondary' || props.variant === 'menu') ?
        props.theme.colors.primary
        :
        props.variant !== 'tertiary' ?
            props.theme.colors.primaryLighter
            :
            props.theme.colors.primary
    };
    }

    &:active {
        background-color: ${(props) => (props.variant === 'primary' || props.variant === undefined) ?
        props.theme.colors.primary
        :
        props.theme.colors.primaryDarker
    };
    }

    img {
        height: 25px;
    }
`

export default StyledButton