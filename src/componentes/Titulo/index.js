import "./Titulo.css";

const Titulo = ({ alterarVisibilidadeFormulario }) => {
  return (
    <div className="titulo">
      <div onClick={alterarVisibilidadeFormulario} className="titulo__botao">
        <img
          src="./imagens/BotaoExibirForm.svg"
          alt="Botão para exibir formulario"
        />
      </div>

      <div className="titulo__texto">
        <h1>Minha Organização:</h1>
      </div>
    </div>
  );
};

export default Titulo;
