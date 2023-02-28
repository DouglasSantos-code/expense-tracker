import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme['gray-600']};
  border-radius: 6px;
  padding: 1rem 2rem;
  margin-top: -70px;
  display: flex;
  align-items: center;
  height: 138px;
  gap: 2rem;

  span {
    display: flex;
    flex-direction: row-reverse;
    position: relative;

    svg {
      position: absolute;
      top: -3px;
    }
  }
`;

export const MonthArea = styled.div`
  display: flex;
  align-items: center;
  width: 16.25rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const MonthArrow = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme['gray-400']};
  transition: 0.2s;

  &:hover {
    color: ${({ theme }) => theme['green-300']};
    transform: scale(1.1);
  }
`;

export const MonthTitle = styled.div`
  flex: 1;
  text-align: center;
`;

export const ResumeArea = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;
`;
