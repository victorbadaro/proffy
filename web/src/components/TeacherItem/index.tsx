import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/9096344?s=460&u=c3d6958cd2a640acfb249cd2d25c2f9c9c525c57&v=4" alt="Victor Badaró"/>
                <div>
                    <strong>Victor Badaró</strong>
                    <span>Desenvolvimento Front-end</span>
                </div>
            </header>

            <p>
                Entusiasta das melhores tecnologias WEB.
                <br/><br/>
                Aluno da Rocketseat, em constante evolução, sendo melhor que ontem e estudando muito pra amanhã ser melhor que hoje.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;