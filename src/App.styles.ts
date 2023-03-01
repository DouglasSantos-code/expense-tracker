import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.div`
  height: 180px;
  text-align: center;
`;

export const HeaderText = styled.h1`
  margin: 0;
  padding: 0;
  padding-top: 3.125rem;
`;

export const Body = styled.div`
  margin: auto;
  max-width: 1340px;
  margin-bottom: 50px;
  padding: 2rem;
  background-color: ${({ theme }) => theme['base-700']};
  border-radius: 40px;
`;

export const Box = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: row-reverse;
  margin-top: 0.5rem;
`;
