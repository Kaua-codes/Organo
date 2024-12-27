import "./Colaborador.css";

const Colaborador = ({ nome, cargo, imagem, corDeFundo }) => {
  return (
    <div className="colaborador">
      <div
        className="colaborador__cabecalho"
        style={{ backgroundColor: corDeFundo }}
      >
        <img src={imagem} alt={`Foto de ${nome}`} />
      </div>

      <div className="colaborador__rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  );
};

export default Colaborador;
