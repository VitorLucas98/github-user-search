import React, { useEffect, useState } from 'react';
import Button from '../../core/components/Button';
import { makeRequest } from '../../core/components/utils/request';
import { User } from '../../core/types/User';
import './styles.scss';


const Search = () => {

    const [user, setUser] = useState<User>();

    console.log(user);

    useEffect(() => {
        makeRequest({ url: 'VitorLucas98' })
            .then(response => setUser(response.data))
    }, []);

    return (
        <div className='search-container'>
            <div className="search-content-1">
                <h1 className='text-title'>Encontre um perfil Github</h1>
                <form>
                    <input type="text" className='input-search'
                        placeholder='Usuário Github' />
                </form>
                <div className="btn-encontrar">
                    <Button text='Encontrar' />
                </div>
            </div>
            <div className="search-content-2">
                <div className='search-content-info-1'>
                    <img src="https://avatars3.githubusercontent.com/u/5726140?v=4"
                        className='img-search'
                        alt="" />
                    <div className="btn-search">
                        <Button text='Ver perfil' />
                    </div>
                </div>
                <div className="search-content-info-2">
                    <div className="search-info-1">
                        <span className="search-info-element">Repositórios públicos: 62</span>
                        <span className="search-info-element">Seguidores: 127</span>
                        <span className="search-info-element">Seguindo: 416</span>
                    </div>
                    <div className='table-info-container'>
                    <h3 className='table-info-title'>Informações</h3>
                        <ul>
                            <li className='table-info'>
                                Empresa:<span> @ZupIT</span>
                            </li>
                            <li className='table-info'>
                                Website/Blog:<span> https://thewashington.dev</span>
                            </li>
                            <li className='table-info'>
                            Localidade:<span> Uberlândia</span>
                            </li>
                            <li className='table-info'>
                            Membro desde:<span> 19/10/2013</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search;