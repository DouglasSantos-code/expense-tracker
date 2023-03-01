import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
`;

export const Title = styled.div`
  font-weight: 400;
  color: ${({ theme }) => theme['base-300']};
  margin-bottom: 1rem;
`;

export const Info = styled.div<{ color?: string }>`
  font-weight: bold;
  font-size: 2rem;
  color: ${(props) => props.color ?? props.theme['base-100']};
`;
