import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme['purple-500']};
  border-radius: 20px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  width: 340px;
  gap: 0.5rem;

  h2 {
    margin-bottom: 0.5rem;
  }
`;
export const InputLabel = styled.label`
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  padding: 0 16px;
  border: none;
  border-radius: 10px;
  color: ${(props) => props.theme['base-200']};
  background-color: ${(props) => props.theme['base-700']};

  &::placeholder {
    color: ${(props) => props.theme['base-200']};
  }

  &[type='date']::-webkit-calendar-picker-indicator {
    cursor: pointer;
    filter: invert(0.8) brightness(50%) sepia(100%) saturate(6%) hue-rotate(240deg);
  }
`;

export const Select = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url("data:image/svg+xml;utf8,<svg fill='gray' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  background-repeat: no-repeat;
  background-position-x: 96%;
  background-position-y: 12px;
  font-size: 1rem;
  width: 100%;
  height: 50px;
  padding: 0 16px;
  border: none;
  border-radius: 10px;
  color: ${(props) => props.theme['base-200']};
  background-color: ${(props) => props.theme['base-700']};
`;
export const Button = styled.button`
  width: 100%;
  height: 50px;
  border: 0;
  background: ${(props) => props.theme['green-700']};
  color: ${(props) => props.theme.white};
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 0.5rem;

  &:hover {
    background: ${(props) => props.theme['green-500']};
    transition: background-color 0.2s;
  }
`;
