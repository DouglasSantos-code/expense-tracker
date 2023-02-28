import { priceFormatter } from '../../utils/formatter';
import * as C from './styles';

type Props = {
  title: string;
  value: number;
  color?: string;
};

export const ResumeItem = ({ title, value, color }: Props) => {
  return (
    <C.Container>
      <C.Title>{title}</C.Title>
      <C.Info color={color}>{priceFormatter.format(value)}</C.Info>
    </C.Container>
  );
};
