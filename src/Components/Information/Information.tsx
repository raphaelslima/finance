import "./style.css";

import { formatCurrentMonth } from "../../helpers/dateFilter";

//Componets
import ResumeItem from "../ResumeItem/ResumeItem";

type Props = {
  currentMonth: string;
  onMonthChange: (newMonth: string) => void;
  income: number;
  expense: number;
};

const Information = ({
  currentMonth,
  onMonthChange,
  income,
  expense,
}: Props) => {
  const handlePrevMonth = () => {
    const [year, month] = currentMonth.split("-");
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() - 1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  };

  const handleNextMonth = () => {
    const [year, month] = currentMonth.split("-");
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth(currentDate.getMonth() + 1);
    onMonthChange(
      `${currentDate.getFullYear()} - ${currentDate.getMonth() + 1}`
    );
  };

  return (
    <div className="container">
      <div className="month">
        <div className="mouthArrow" onClick={handlePrevMonth}>
          ⬅️
        </div>
        <h3>{formatCurrentMonth(currentMonth)}</h3>
        <div className="mouthArrow" onClick={handleNextMonth}>
          ➡️
        </div>
      </div>
      <div className="resume">
        <ResumeItem title="Receita" value={income} color={"green"} />
        <ResumeItem title="Despesa" value={expense} color={"red"} />
        <ResumeItem
          title="Balanço"
          value={income - expense}
          color={income - expense > 0 ? "green" : "red"}
        />
      </div>
    </div>
  );
};

export default Information;
