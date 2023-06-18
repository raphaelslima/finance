import { Data } from "../types/Data";
import { Category } from "../types/Category";

export const getCurrentMonth = (): string => {
  let now = new Date();
  return `${now.getFullYear()} - ${now.getMonth() + 1}`;
};

export const filterDataByMonth = (datas: Data[], date: string): Data[] => {
  let newList: Data[] = [];
  let [year, month] = date.split("-");

  datas.forEach((item) => {
    if (
      item.date.getFullYear() === parseInt(year) &&
      item.date.getMonth() + 1 === parseInt(month)
    ) {
      newList.push(item);
    }
  });

  return newList;
};

export const formatDate = (date: Date): string => {
  return `${date.getDate() > 10 ? date.getDate() : `0${date.getDate()}`}/${
    date.getMonth() + 1 > 10 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`
  }/${date.getFullYear()}`;
};

export const formatCurrentMonth = (currentMonth: string): string => {
  let [year, month] = currentMonth.split("-");
  const monthPT = [
    "Janiero",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  return `${monthPT[parseInt(month) - 1]} ${year}`;
};
