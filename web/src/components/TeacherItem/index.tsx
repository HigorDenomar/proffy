import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/38510607?s=460&u=c21148a73c3dd471774ae4a9a11bb1d81d46e209&v=4" alt="Higor Denomar" />
        <div>
          <strong>Higor Denomar</strong>
          <span>Química</span>
        </div>
      </header>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            <br /><br />
            Sapiente eaque dignissimos aut alias deserunt illo perferendis vero earum ipsam? Explicabo, suscipit optio.
          </p>

      <footer>
        <p>
          Preço/hora
              <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
              Entrar em contato
            </button>
      </footer>
    </article>
  );
}

export default TeacherItem;