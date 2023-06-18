import { useState, useEffect } from "react";
import "./style.css";

// types
import { Data } from "../../types/Data";
import { Category } from "../../types/Category";

//data
import { categories } from "../../data/categories";
import { datas } from "../../data/initialData";

//Componets
import Table from "../Table/Table";
import Information from "../Information/Information";
import Form from "../Form/Form";

//helpers
import { getCurrentMonth, filterDataByMonth } from "../../helpers/dateFilter";

const Main = () => {
  const [datasList, setDataList] = useState<Data[]>(datas);
  const [currentMonth, setCurrentMonth] = useState<string>(getCurrentMonth());
  const [filterDataList, setFilterDataList] = useState<Data[]>([]);
  const [income, setIncome] = useState<number>(0);
  const [expense, setExpense] = useState<number>(0);

  useEffect(() => {
    setFilterDataList(filterDataByMonth(datasList, currentMonth));
  }, [datasList, currentMonth]);

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    filterDataList.forEach((data) => {
      if (categories[data.category].expense) {
        expenseCount += data.value;
      } else {
        incomeCount += data.value;
      }

      setIncome(incomeCount);
      setExpense(expenseCount);
    });
  }, [filterDataList]);

  const handleMonthChange = (newMonth: string): void => {
    setCurrentMonth(newMonth);
  };

  const onAdd = (data: Data): void => {
    let newListData = [...datasList];
    newListData.push(data);
    setDataList(newListData);
  };

  return (
    <main className="main">
      <Information
        currentMonth={currentMonth}
        onMonthChange={handleMonthChange}
        income={income}
        expense={expense}
      />
      <Form onAdd={onAdd} />
      <Table datas={filterDataList} />
    </main>
  );
};

export default Main;
