import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme['base-600']};
  border-radius: 20px;
  padding: 1rem 2rem;
  margin-top: -98px;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  height: 138px;
  gap: 2rem;
  box-shadow: 0 2px 19px 2px #192233;

  span {
    display: flex;
    flex-direction: row-reverse;
    position: relative;
    background-color: ${({ theme }) => theme['base-700']};
    padding: 1rem 2rem;
    border-radius: 20px;
    width: 100%;

    svg {
      position: absolute;
      top: 0.875rem;
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
  color: ${({ theme }) => theme['base-100']};
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
  gap: 1rem;
`;
