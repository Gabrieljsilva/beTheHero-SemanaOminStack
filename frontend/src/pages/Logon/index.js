import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';

import HeroesImage from '../../assets/heroes.png';
import LogoImg from '../../assets/logo.svg';
import API from '../../services/api';

export default function Logon(){
    const history = useHistory();
    const [ id, setId ] = useState('');

    async function handleLogin(e){
        e.preventDefault();

        try {
            const response = await API.post('session', { id });
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.ong.name);
            history.push('/profile');
        } catch (error) {
            alert('Falha ao fazer logim, tente novamente!');
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={ LogoImg } alt="heroes-logo"/>
            
                <form onSubmit={handleLogin}>

                    <h1>Faça Seu Logon</h1>
                    <input type="text"placeholder="Sua ID" value={id} onChange={ e => setId(e.target.value) } />
                    <button  className="button"type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041"> </FiLogIn>
                        Não tenho cadastro
                    </Link>
                </form>

            </section>

            <img src={ HeroesImage } alt="heroes-logo"/>
        </div>
    );
}