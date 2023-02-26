export const getLocalStorage = () => {
  let expenses = localStorage.getItem('expenses');
  if (typeof expenses === 'string') {
    return (expenses = JSON.parse(expenses));
  } else {
    return [];
  }
};
