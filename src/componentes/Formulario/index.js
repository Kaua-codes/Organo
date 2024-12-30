import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Botao from "../Botao";
import ListaSuspensa from "../ListaSuspensa";
import "./formulario.css";
import Campo from "../Campo/campo";

const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const [nomeTime, setNomeTime] = useState("");
  const [corTime, setCorTime] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoColaboradorCadastrado({
      id: uuidv4(),
      favorito: false,
      nome,
      cargo,
      imagem,
      time,
    });
    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  };

  return (
    props.visivel && (
      <section className="formulario">
        <div className="formulario__container">
          <form onSubmit={aoSalvar}>
            <h2>Preencha os dados pra criar o card do colaborador</h2>
            <Campo
              obrigatorio={true}
              label="Nome"
              placeholder="Digite seu nome"
              valor={nome}
              aoAlterado={(valor) => setNome(valor)}
            />
            <Campo
              obrigatorio={true}
              label="Cargo"
              placeholder="Digite seu cargo"
              valor={cargo}
              aoAlterado={(valor) => setCargo(valor)}
            />
            <Campo
              label="Imagem"
              placeholder="Digite o endereço da imagem"
              valor={imagem}
              aoAlterado={(valor) => setImagem(valor)}
            />

            <ListaSuspensa
              obrigatorio={true}
              label="Time"
              itens={props.times}
              valor={time}
              aoAlterado={(valor) => setTime(valor)}
            />
            <Botao>Criar card</Botao>
          </form>

          <form
            onSubmit={(evento) => {
              evento.preventDefault();
              props.aoCadastrarTime({ nome: nomeTime, corPrimaria: corTime });

              setCorTime("");
              setNomeTime("");
            }}
          >
            <h2>Preencha os campos para criar um novo time</h2>
            <Campo
              obrigatorio
              label="Nome"
              placeholder="Digite o nome do time"
              valor={nomeTime}
              aoAlterado={(valor) => setNomeTime(valor)}
            />
            <Campo
              obrigatorio
              label="Cor"
              type="color"
              placeholder="Digite a cor do time"
              valor={corTime}
              aoAlterado={(valor) => setCorTime(valor)}
            />

            <Botao>Criar novo time</Botao>
          </form>
        </div>
      </section>
    )
  );
};

export default Formulario;
