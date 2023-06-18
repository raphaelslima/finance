import "./style.css";

type Props = {
  title: string;
  value: number;
  color: string;
};

const ResumeItem = ({ title, value, color }: Props) => {
  return (
    <div className="container-info">
      <h3>{title}</h3>
      <p style={{ color: `${color}` }}>
        {value.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </p>
    </div>
  );
};

export default ResumeItem;
