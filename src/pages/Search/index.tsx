import React, { useState } from 'react';
import { makeRequest } from '../../core/components/utils/request';
import { User } from '../../core/types/User';
import Form from './Form';
import './styles.scss';

const Search = () => {

    const [user, setUser] = useState<User>();

    const handlerSearch = (username: string) => {
        makeRequest({ url: `${username}` })
            .then(response => setUser(response.data))
    }

    return (
        <div className='search-container'>
            <Form onUsername={handlerSearch} />
            {user && (<div className="search-content-2">
                <div className='search-content-info-1'>
                    <img src={user?.avatar_url}
                        className='img-search'
                        alt="imagem do usuário" />
                    <div className="btn-search">
                        <button>Ver perfil</button>
                    </div>
                </div>
                <div className="search-content-info-2">
                    <div className="search-info-1">
                        <span className="search-info-element">Repositórios públicos:{user?.public_repos}</span>
                        <span className="search-info-element">Seguidores: {user?.followers}</span>
                        <span className="search-info-element">Seguindo: {user?.following}</span>
                    </div>
                    <div className='table-info-container'>
                        <h3 className='table-info-title'>Informações</h3>
                        <ul>
                            <li className='table-info'>
                                Empresa:<span> {user.company}</span>
                            </li>
                            <li className='table-info'>
                                Website/Blog:<span> {user.blog}</span>
                            </li>
                            <li className='table-info'>
                                Localidade:<span> {user.location}</span>
                            </li>
                            <li className='table-info'>
                                Membro desde:<span> {user.created_at}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>)}
        </div>
    )
}

export default Search;