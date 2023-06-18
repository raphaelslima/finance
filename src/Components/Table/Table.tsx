import "./style.css";

//Types
import { Data } from "../../types/Data";
import { categories } from "../../data/categories";

//Helpers
import { formatDate } from "../../helpers/dateFilter";

type Props = {
  datas: Data[];
};

const Table = ({ datas }: Props) => {
  return (
    <table className="table">
      <thead>
        <th>Data</th>
        <th>Categoria</th>
        <th>Título</th>
        <th>Valor</th>
      </thead>
      <tbody>
        {datas.length > 0
          ? datas.map((data, i) => {
              return (
                <tr key={i}>
                  <td>{formatDate(data.date)}</td>
                  <td
                    style={{
                      background: `${categories[data.category].color}`,
                      color: "#fff",
                    }}
                  >
                    {categories[data.category].title}
                  </td>
                  <td>{data.name}</td>
                  {categories[data.category].expense ? (
                    <td className="expense">
                      {data.value.toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </td>
                  ) : (
                    <td className="noExpense">
                      {data.value.toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </td>
                  )}
                </tr>
              );
            })
          : false}
      </tbody>
    </table>
  );
};

export default Table;
