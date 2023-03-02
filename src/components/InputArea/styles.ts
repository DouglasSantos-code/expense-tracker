import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme['base-600']};
  border-radius: 20px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  width: 21.25rem;
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
  height: 3.125rem;
  padding: 0 1rem;
  border: none;
  border-radius: 10px;
  color: ${(props) => props.theme['base-100']};
  background-color: ${(props) => props.theme['base-700']};

  &::placeholder {
    color: ${(props) => props.theme['base-100']};
  }

  &[type='date']::-webkit-calendar-picker-indicator {
    cursor: pointer;
    filter: brightness(0) saturate(100%) invert(54%) sepia(5%) saturate(1894%)
      hue-rotate(181deg) brightness(91%) contrast(83%);
  }

  &[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Select = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url("data:image/svg+xml;utf8,<svg fill='rgb(115 128 153) ' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  background-repeat: no-repeat;
  background-position-x: 96%;
  background-position-y: 12px;
  font-size: 1rem;
  width: 100%;
  height: 3.125rem;
  padding: 0 1rem;
  border: none;
  border-radius: 10px;
  color: ${(props) => props.theme['base-100']};
  background-color: ${(props) => props.theme['base-700']};
`;
export const Button = styled.button`
  width: 100%;
  height: 3.125rem;
  border: 0;
  background: ${(props) => props.theme['green-300']};
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
