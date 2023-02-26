import { Item } from '../types/Item';
import { getLocalStorage } from '../utils/getTaskStorage';

let formatedGetStorage = [];

for (let i of getLocalStorage()) {
  i.date = new Date(i.date);
  formatedGetStorage.push(i);
}

export const items: Item[] = formatedGetStorage;
