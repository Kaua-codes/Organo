import hexToRgba from "hex-to-rgba";
import Colaborador from "../Colaborador";
import "./Time.css";

const Time = (props) => {
  const corSecundaria = hexToRgba(props.corPrimaria, 0.4);

  return (
    props.colaboradores.length > 0 && (
      <section className="time" style={{ backgroundColor: corSecundaria }}>
        <input
          type="color"
          className="time__input-cor"
          value={props.corPrimaria}
          onChange={(evento) => props.mudarCor(evento.target.value, props.id)}
        />

        <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>

        <div className="colaboradores">
          {props.colaboradores.map((colaborador) => (
            <Colaborador
              aoDeletar={props.aoDeletar}
              aoFavoritar={props.aoFavoritar}
              corDeFundo={props.corPrimaria}
              favorito={colaborador.favorito}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
              key={colaborador.nome}
              id={colaborador.id}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Time;
