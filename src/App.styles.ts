import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 2rem;
`;

export const Header = styled.div`
  height: 9.25rem;
  margin-top: 3rem;
  text-align: center;
  display: flex;
  gap: 1rem;
  justify-content: center;
  line-height: 1;

  svg {
    color: ${({ theme }) => theme['green-300']};
  }
`;

export const HeaderText = styled.h1`
  margin: 0;
  padding: 0;

  color: #ced4eb;
`;

export const Body = styled.div`
  margin: auto;
  max-width: 83.75rem;
  margin-bottom: 3.125rem;
  padding: 2rem;
  background-color: ${({ theme }) => theme['base-700']};
  border-radius: 40px;
`;

export const Box = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: row-reverse;
  margin-top: 0.5rem;
`;
