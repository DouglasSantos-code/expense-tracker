import styled from 'styled-components';

export const TableLine = styled.tr`
  td {
    &:first-child {
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    }
    &:last-child {
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    }
  }
`;

export const TableColumn = styled.td`
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme['base-800']};
`;

export const Category = styled.div<{ color: string }>`
  display: inline-block;
  width: max-content;
  padding: 0.313rem 0.625rem;
  border-radius: 6px;
  color: ${({ theme }) => theme['base-100']};
  background-color: ${(props) => props.color};
`;

export const Value = styled.div<{ color: string }>`
  color: ${(props) => props.color};
  width: max-content;
`;
