import styled from 'styled-components';

export const Table = styled.table`
  flex: 1;
  display: block;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  transform: scaleX(-1);

  border-radius: 20px;
  background-color: ${({ theme }) => theme['base-900']};
  padding: 1rem 2rem;
  max-height: 25rem;
  overflow-y: scroll;

  tbody {
    transform: scaleX(-1);
  }
`;
