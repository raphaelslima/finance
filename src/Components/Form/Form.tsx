import { useState } from "react";
import "./style.css";

import { Data } from "../../types/Data";
import { categories } from "../../data/categories";

type Props = {
  onAdd: (data: Data) => void;
};

export const Form = ({ onAdd }: Props) => {
  const [itemDate, setItemDate] = useState<string>("");
  const [itemCategory, setItemCategory] = useState<string>("");
  const [itemName, setItemName] = useState<string>("");
  const [itemValue, setItemValue] = useState<number>(0);

  let categoryKeys: string[] = Object.keys(categories);

  const clearAllFields = () => {
    setItemDate("");
    setItemCategory("");
    setItemName("");
    setItemValue(0);
  };

  const handleSubmit = () => {
    let errors: string[] = [];

    if (isNaN(new Date(itemDate).getTime())) {
      errors.push("Data inválida!");
    }
    if (!categoryKeys.includes(itemCategory)) {
      errors.push("Categoria inválida!");
    }
    if (itemName === "") {
      errors.push("Título vazio!");
    }
    if (itemValue <= 0) {
      errors.push("Valor inválido!");
    }

    if (errors.length > 0) {
      alert(errors.join("\n"));
    } else {
      onAdd({
        date: new Date(),
        category: itemCategory,
        name: itemName,
        value: itemValue,
      });
      clearAllFields();
    }
  };

  return (
    <div className="container-insertion">
      <div className="container-form">
        <div className="sectionOne">
          <div className="input">
            <label htmlFor="">Data</label>
            <input
              type="date"
              value={itemDate}
              onChange={(e) => setItemDate(e.target.value)}
            />
          </div>

          <div className="input">
            <label htmlFor="">Caregoria</label>
            <select
              value={itemCategory}
              onChange={(e) => setItemCategory(e.target.value)}
            >
              <>
                <option></option>
                {categoryKeys.map((key, index) => (
                  <option key={index} value={key}>
                    {categories[key].title}
                  </option>
                ))}
              </>
            </select>
          </div>
        </div>

        <div className="sectionTwo">
          <div className="input">
            <label htmlFor="">Nome</label>
            <input
              type="text"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              maxLength={15}
            />
          </div>

          <div className="input">
            <label htmlFor="">Valor</label>
            <input
              type="number"
              value={itemValue}
              onChange={(e) => setItemValue(parseFloat(e.target.value))}
            />
          </div>
        </div>
      </div>

      <button onClick={handleSubmit}>Adicionar</button>
    </div>
  );
};

export default Form;
