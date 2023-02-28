import styled from 'styled-components';

export const Table = styled.table`
  flex: 1;
  display: block;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  border-radius: 20px;
  background-color: ${({ theme }) => theme['base-900']};
  padding: 1rem 2rem;
`;
