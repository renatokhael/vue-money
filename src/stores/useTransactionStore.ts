import { defineStore } from "pinia";

export const useTransactionStore = defineStore("transaction", {
  state: () => ({
    transactions: [],
  }),
  actions: {
    addTransaction(transaction) {
      this.transactions.push(transaction);
    },
  },
});
