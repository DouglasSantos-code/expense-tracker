import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']};
  }

  body {
    background-color: ${(props) => props.theme['gray-800']};
    color: ${(props) => props.theme['gray-100']};
    -webkit-font-smoothing: antialiased;
    overflow: hidden;
  }

  body, input, textarea, button, label {
    font: 400 1rem Roboto, sans-serif;
  }
/* Chrome, Edge, and Safari */

 *::-webkit-scrollbar {
  width: 0.5rem;
}

*::-webkit-scrollbar-track {
  background: ${({ theme }) => theme['gray-900']};

}

*::-webkit-scrollbar-thumb {
  background: ${({ theme }) => theme['green-300']};

  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme['green-700']};
}

`;
