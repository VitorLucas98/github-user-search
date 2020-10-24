import React from 'react';
import './styles.scss';

type Props ={
    text:string;
}

const Button = ({text}:Props) =>(
    <button>
        {text}
    </button>
);

export default Button;