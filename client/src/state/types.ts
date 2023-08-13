export interface ExpensesByCategory {
  salary: number;
  supplies: number;
  services: number;
}

export interface Month {
  id: string;
  _id: string;
  month: string;
  expenses: number;
  nonOperationalExpenses: number;
  operationalExpenses: number;
  revenue: number;
}

export interface Day {
  id: string;
  _id: string;
  date: string;
  expenses: number;
  revenue: number;
}

export interface GetKpisResponse {
  id: string;
  _id: string;
  __v: number;
  totalProfit: number;
  totalRevenue: number;
  totalExpenses: number;
  expensesByCategory: ExpensesByCategory;
  monthlyData: Array<Month>;
  dailyData: Array<Day>;
  createdAt: string;
  updatedAt: string;
}

export interface GerProductResponse {
  id: string;
  _id: string;
  __v: number;
  price: number;
  expense: number;
  transactions: Array<String>;
  createdAt: string;
  updatedAt: string;
}

export interface GetTransactionsResponse {
  id: string;
  _id: string;
  __v: number;
  buyer: number;
  amount: number;
  productIds: Array<String>;
  createdAt: string;
  updatedAt: string;
}