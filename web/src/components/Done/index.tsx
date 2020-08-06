import React from 'react';
import { useHistory } from 'react-router-dom';

import doneIcon from '../../assets/images/icons/done.svg';

import './styles.css';

function Done() {
  const history = useHistory();

  return (
    <div id="container-done">
      <img src={doneIcon} alt="Concluído" />
      <strong>Cadastro salvo!</strong>
      <p>Tudo certo, seu cadastro está na nossa lista de professores.</p>
      <p>Agora é só ficar de olho no seu WhatsApp.</p>

      <button
        type="button"
        onClick={() => history.push('/')}
      > Acessar lista </button>
    </div>
  );
}

export default Done;