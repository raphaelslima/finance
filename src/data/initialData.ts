import { Data } from "../types/Data";

import { dateRandom } from "../helpers/dateFilter";

export const datas: Data[] = [
  {
    id: 0,
    date: dateRandom(),
    category: "food",
    name: "Burguer King",
    value: 50.9,
  },
  {
    id: 1,
    date: dateRandom(),
    category: "food",
    name: "McDonalts",
    value: 50.9,
  },
  {
    id: 2,
    date: dateRandom(),
    category: "education",
    name: "Curso Udemy",
    value: 20.9,
  },
  {
    id: 3,
    date: dateRandom(),
    category: "leisure",
    name: "Parque",
    value: 60.3,
  },
  {
    id: 4,
    date: dateRandom(),
    category: "rent",
    name: "Aluguel",
    value: 1500,
  },
  {
    id: 5,
    date: dateRandom(),
    category: "salary",
    name: "Salário",
    value: 3300,
  },
];
