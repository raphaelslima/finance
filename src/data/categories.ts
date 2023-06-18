import { Category } from "../types/Category";

export const categories: Category = {
  food: {
    title: "Alimentação",
    color: "brown",
    expense: true,
  },
  rent: {
    title: "Aluguel",
    color: "orange",
    expense: true,
  },
  education: {
    title: "Educação",
    color: "gray",
    expense: true,
  },
  salary: {
    title: "Salário",
    color: "blue",
    expense: false,
  },
  leisure: {
    title: "Lazer",
    color: "purple",
    expense: true,
  },
};
