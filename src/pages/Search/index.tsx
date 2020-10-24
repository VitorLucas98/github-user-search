import React from 'react';
import Button from '../../core/components/Button';
import './styles.scss';

const Search = () => (
    <div className='search-container'>
        <div className="search-content">
            <div className='search-title'>
                <h5>Encontre um perfil Github</h5>
            </div>
            <div className="form-search">
                <input type='text' placeholder='Usuário Github' className='input-search' />
            </div>
            <div className='btn-form'>
                <Button text='Encontrar' />
            </div>
        </div>
    </div>
);

export default Search;