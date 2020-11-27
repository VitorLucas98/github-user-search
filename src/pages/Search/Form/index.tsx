import React, { useState } from 'react';
import './styles.scss';

type Props = {
    onUsername: (username: string) => void;
}

const Form = ({onUsername}:Props) => {

    const [username, setUsername] = useState('');

    const handlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value)    
    }
    const handlerSubmit = (event: React.MouseEvent<HTMLFormElement>) => {
        event.preventDefault()
        onUsername(username);
    }

    return (
        <div className="search-content-1">
            <h1 className='text-title'>Encontre um perfil Github</h1>
            <form onSubmit={handlerSubmit}>
                <input type="text"
                    name='username'
                    className='input-search'
                    placeholder='Usuário Github'
                    value={username}
                    onChange={handlerChange} />
                <div className="btn-encontrar">
                    <button>Encontrar</button>
                </div>
            </form>
        </div>
    );

}

export default Form;