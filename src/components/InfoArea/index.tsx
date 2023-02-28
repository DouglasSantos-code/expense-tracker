import * as C from './styles';
import { formatCurrentMonth } from '../../helpers/dateFilter';
import { ResumeItem } from '../ResumeItem';
import {
  ArrowCircleDown,
  ArrowCircleUp,
  Bank,
  CaretCircleLeft,
  CaretCircleRight
} from 'phosphor-react';
import { useTheme } from 'styled-components';

type Props = {
  currentMonth: string;
  onMonthChange: (newMonth: string) => void;
  income: number;
  expense: number;
};

export const InfoArea = ({ currentMonth, onMonthChange, income, expense }: Props) => {
  const theme = useTheme();

  const handlePrevMonth = () => {
    let [year, month] = currentMonth.split('-');
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() - 1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  };

  const handleNextMonth = () => {
    let [year, month] = currentMonth.split('-');
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() + 1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  };

  return (
    <C.Container>
      <C.MonthArea>
        <C.MonthArrow onClick={handlePrevMonth}>
          <CaretCircleLeft size={32} />
        </C.MonthArrow>
        <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>
        <C.MonthArrow onClick={handleNextMonth}>
          <CaretCircleRight size={32} />
        </C.MonthArrow>
      </C.MonthArea>
      <C.ResumeArea>
        <span>
          <ArrowCircleUp size={26} color={theme['green-300']} />
          <ResumeItem title="Entradas" value={income} />
        </span>
        <span>
          <ResumeItem title="Saídas" value={expense} />
          <ArrowCircleDown size={26} color={theme['red-300']} />
        </span>
        <span>
          <ResumeItem
            title="Total"
            value={income - expense}
            color={income - expense < 0 ? '#F75A68' : '#04D361'}
          />
          <Bank size={26} color={theme['green-300']} />
        </span>
      </C.ResumeArea>
    </C.Container>
  );
};
