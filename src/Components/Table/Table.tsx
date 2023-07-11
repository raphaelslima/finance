import "./style.css";

import { AiOutlineDelete } from "react-icons/ai";

//Types
import { Data } from "../../types/Data";
import { categories } from "../../data/categories";

//Helpers
import { formatDate } from "../../helpers/dateFilter";

type Props = {
  datas: Data[];
  onDelete: (id: number) => void;
};

const Table = ({ datas, onDelete }: Props) => {
  return (
    <table className="table">
      <thead>
        <th>Data</th>
        <th>Categoria</th>
        <th>Título</th>
        <th>Valor</th>
        <th>Excluir</th>
      </thead>
      <tbody>
        {datas.length > 0
          ? datas.map((data) => {
              return (
                <tr key={data.id}>
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
                      <p>
                        {data.value.toLocaleString("pt-br", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </p>
                    </td>
                  ) : (
                    <td className="noExpense">
                      {data.value.toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </td>
                  )}
                  <td>
                    <button
                      className="btn-delete"
                      onClick={() => onDelete(data.id)}
                    >
                      <AiOutlineDelete />
                    </button>
                  </td>
                </tr>
              );
            })
          : false}
      </tbody>
    </table>
  );
};

export default Table;
