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
  freelancer: {
    title: "Renda-extra",
    color: "darkgreen",
    expense: false,
  },
  clothes: {
    title: "Roupas",
    color: "darkcyan",
    expense: true,
  },
  transport: {
    title: "Transporte",
    color: "lightcyan",
    expense: true,
  },
};
