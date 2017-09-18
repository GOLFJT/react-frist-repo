import styled , { ThemeProvider } from 'styled-components'

export const Section = styled.section`
    background: ${props =>props.theme.main};
`;

Section.defaultProps = {
    theme: {
        main: 'palevioletred',
        inputColor: '#000'
    }
}

export  const darkTheme = {
    main: '#3e3e3e',
    inputColor: '#292929'
};
export const lightTheme = {
    main: '#dedede',
    inputColor: '#ffffff'
};


export const InputTypePassword = styled.input.attrs({
    type: 'password',
    inputColor: props =>props.theme.inputColor
})`
    padding: 0.5em;
    margin: 0.5em;
    color: palevioletred;
    background: ${props =>props.inputColor};
    border: none;
    border-radius: 3px;
    font-size: 20px;
`;

export const Textarea = styled.textarea`
    padding: 0.5em;
    margin: 0.5em;
    color: palevioletred;
    background: ${props =>props.theme.inputColor};
    border: none;
    border-radius: 3px;
    font-size: 20px;
    width: 100%;
`;

export const Button = styled.button`
    background: palevioletred;
    color: white;
    font-size: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
        ${props => props.primary && `
            background: white;
            color: palevioletred;
        `}
        ${props => props.delete && `
            float:left;
        `}
`;

export const Form = styled.form`
    flex-grow: 1;
    padding: 20px;
`;

export const FormBox = styled.div`
    display: flex;
        ${props => props.horizontal && `
            flex-direction: column;
        `}
        ${props => props.listPost && `
            padding:20px;
            border-top: 1px solid #848484
        `}
`;

export const TextPost = styled.span`
    line-height:40px;
    color:#fff;
    padding: 0 10px;
    flex-grow: 1;
`
