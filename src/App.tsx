import { useState, useEffect } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { categories } from './data/categories';
import { items } from './data/inicialItem';
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea';
import { InfoArea } from './components/InfoArea';
import { InputArea } from './components/InputArea';
import { darkTheme } from './styles/themes/default';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { Coins, CurrencyDollar, Money } from 'phosphor-react';

export function App() {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(list));
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for (let i in filteredList) {
      if (categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }
    }

    setIncome(incomeCount);
    setExpense(expenseCount);
  }, [filteredList]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  };

  const handleAddItem = (item: Item) => {
    let newList = [...list];
    newList.push(item);
    setList(newList);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <C.Container>
        <C.Header>
          <Money size={32} />
          <C.HeaderText>Sistema Financeiro</C.HeaderText>
        </C.Header>
        <C.Body>
          <InfoArea
            currentMonth={currentMonth}
            onMonthChange={handleMonthChange}
            income={income}
            expense={expense}
          />
          <C.Box>
            <InputArea onAdd={handleAddItem} />
            <TableArea list={filteredList} />
          </C.Box>
        </C.Body>
      </C.Container>
    </ThemeProvider>
  );
}
