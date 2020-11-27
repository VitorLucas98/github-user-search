import React from 'react';
import './styles.scss';
import {Link} from 'react-router-dom';

const Home = () => (
    <div className="home-container">
            <h1 className='home-title'>Desafio do Capítulo 3, <br/> Bootcamp DevSuperior</h1>
        <div className="home-description">
            <p>Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior. <br />
Favor observar as instruções passadas no capítulo sobre a elaboração deste projeto.<br />
Este design foi adaptado a partir de Ant Design System for Figma,
de Mateusz Wierzbicki: <span className='email-info'>antforfigma@gmail.com</span> </p>
        </div>
        <div className="btn-container">
            <Link to='/search'>
            <button>
                Começar
            </button>
            </Link>
        </div>
    </div>
);

export default Home;