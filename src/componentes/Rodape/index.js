import "./Rodape.css";

const Rodape = () => {
  return (
    <footer className="rodape">
      <section className="rodape__redes">
        <ul>
          <li>
            <a
              href="https://github.com/kaua-codes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/imagens/fb.png" alt="Facebook" />
            </a>
          </li>

          <li>
            <a
              href="https://github.com/kaua-codes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/imagens/tw.png" alt="Twiter" />
            </a>
          </li>

          <li>
            <a
              href="https://github.com/kaua-codes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/imagens/ig.png" alt="Instagram" />
            </a>
          </li>
        </ul>
      </section>

      <section className="rodape__imagem-container">
        <img src="/imagens/logo.png" alt="Logo" />
      </section>

      <section>
        <p>Desenvolvido por Kauã</p>
      </section>
    </footer>
  );
};

export default Rodape;
