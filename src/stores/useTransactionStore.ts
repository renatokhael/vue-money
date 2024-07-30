import { defineStore } from "pinia";

interface Transaction {
  id: number;
  amount: number;
  description: string;
  date: string;
  // Adicione outros campos que sua transação possa ter
}

interface State {
  transactions: Transaction[];
}

export const useTransactionStore = defineStore({
  id: "transaction",
  state: (): State => ({
    transactions: [],
  }),
  actions: {
    addTransaction(transaction: Transaction) {
      this.transactions.push(transaction);
    },
  },
});
