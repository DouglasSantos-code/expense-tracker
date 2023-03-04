import * as C from './styles';
import { Item } from '../../types/Item';
import { TableItem } from '../TableItem';

type Props = {
  list: Item[];
};

export const TableArea = ({ list }: Props) => {
  return (
    <C.Table>
      <tbody>
        {list.length < 1 && <C.InitialTable>Não há registros esse mês</C.InitialTable>}

        {list.map((item, index) => (
          <TableItem key={index} item={item} />
        ))}
      </tbody>
    </C.Table>
  );
};
