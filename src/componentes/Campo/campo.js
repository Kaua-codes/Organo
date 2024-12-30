import "./campo.css";

const Campo = (props) => {
  //const [valor, setValor] = useState("")

  const aoDigitado = (evento) => {
    //setValor(evento.target.value)
    props.aoAlterado(evento.target.value);
  };

  return (
    <div className={`campo campo-${props.type || "text"}`}>
      <label>{props.label}</label>
      <input
        value={props.valor}
        type={props.type || "text"}
        onChange={aoDigitado}
        required={props.obrigatorio}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Campo;
