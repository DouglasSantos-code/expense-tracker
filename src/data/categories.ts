import { Category } from '../types/Category';

export const categories: Category = {
  salary: { title: 'Salário', color: '#015F43', expense: false },
  extraIncome: { title: 'Renda extra', color: '#015F43', expense: false },
  unemploymentBenefit: { title: 'Auxílio desemprego', color: '#015F43', expense: false },
  rent: { title: 'Aluguel', color: '#AA2834', expense: true },
  food: { title: 'Alimentação', color: '#AA2834', expense: true },
  homeBills: { title: 'Contas de casa', color: '#AA2834', expense: true },
  transport: { title: 'Transporte', color: '#AA2834', expense: true },
  monthlySubscriptions: { title: 'Assinaturas mensais', color: '#AA2834', expense: true },
  education: { title: 'Educação', color: '#AA2834', expense: true }
};
