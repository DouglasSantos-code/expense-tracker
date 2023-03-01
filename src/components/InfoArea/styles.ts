import styled from 'styled-components';

export const Container = styled.div`
  /* background: ${({ theme }) => theme['purple-700']}; */
  background: ${({ theme }) => theme['purple-linear']};
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
  color: ${({ theme }) => theme['purple-500']};
  border: 3px solid ${({ theme }) => theme['purple-500']};
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${({ theme }) => theme['green-500']};
    border-color: ${({ theme }) => theme['green-500']};
    transition: 0.2s;
  }
`;

export const MonthTitle = styled.div`
  flex: 1;
  text-align: center;
  font-weight: 700;
`;

export const ResumeArea = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;
  gap: 1rem;
`;
