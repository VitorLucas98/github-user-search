import React from 'react';
import Button from '../../core/components/Button';
import './styles.scss';
import {Link} from 'react-router-dom';

const Home = () => (
    <div className="home-container">
        <div className="home-title">
            <h5>Desafio do Capítulo 3, Bootcamp DevSuperior</h5>
        </div>
        <div className="home-description">
            <p>Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior. <br />
Favor observar as instruções passadas no capítulo sobre a elaboração deste projeto.<br />
Este design foi adaptado a partir de Ant Design System for Figma,
de Mateusz Wierzbicki: <a href="/"> antforfigma@gmail.com</a></p>
        </div>
        <div className="btn-container">
            <Link to='/search'>
            <Button text='Começar' />
            </Link>
        </div>
    </div>
);

export default Home;