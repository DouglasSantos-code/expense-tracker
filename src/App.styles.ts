import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.div`
  background-color: ${({ theme }) => theme['gray-900']};

  height: 212px;
  text-align: center;
`;

export const HeaderText = styled.h1`
  margin: 0;
  padding: 0;
  padding-top: 52px;
`;

export const Body = styled.div`
  margin: auto;
  max-width: 1240px;
  margin-bottom: 50px;
`;

export const Box = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: row-reverse;
  margin-top: 0.5rem;
`;
