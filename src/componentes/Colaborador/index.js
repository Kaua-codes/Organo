import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import "./Colaborador.css";

const Colaborador = ({
  id,
  favorito,
  nome,
  cargo,
  imagem,
  corDeFundo,
  aoDeletar,
  aoFavoritar,
}) => {
  function favoritar() {
    aoFavoritar(id);
  }

  const propsFavoritar = {
    onClick: favoritar,
    size: 35,
  };

  return (
    <div className="colaborador">
      <AiFillCloseCircle
        size={35}
        className="colaborador__deletar"
        onClick={() => aoDeletar(id)}
      />
      <div
        className="colaborador__cabecalho"
        style={{ backgroundColor: corDeFundo }}
      >
        <img src={imagem} alt={`Foto de ${nome}`} />
      </div>

      <div className="colaborador__rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
        <div className="colaborador__favoritar">
          {favorito ? (
            <AiFillHeart {...propsFavoritar} color="#FF0909" />
          ) : (
            <AiOutlineHeart {...propsFavoritar} color="#000000" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Colaborador;
