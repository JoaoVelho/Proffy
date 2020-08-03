import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/66092871?s=460&v=4"
          alt="Johnny"
        />
        <div>
          <strong>Johnny Old</strong>
          <span>Física</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet consectetur.
        <br />
        <br />
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
        dignissimos aliquam vero ab eligendi cupiditate voluptate eos voluptas
        asperiores quisquam!
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
