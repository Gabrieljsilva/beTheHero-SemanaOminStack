import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import API from '../../services/api';

import './styles.css';
import LogoImg from '../../assets/logo.svg';


export default function Register(){
    const [ name,       setName ]       = useState('');
    const [ email,      setEmail ]      = useState('');
    const [ whatsapp,   setWhatsapp ]   = useState('');
    const [ city,       setCity ]       = useState('');
    const [ uf,         setUF ]         = useState('');

    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();
        const data = { name, email, whatsapp, city, uf };
        try {
            const response = await API.post('ongs', data);

            alert(`Seu ID de acesso: ${response.data.id}`);
            history.push('/');
        } catch (error) {
            alert('Erro no cadastro tente novamente');
        }
    }


    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={LogoImg} alt="Logo Be The Hero"/>
                    <h1>Cadastro</h1>
                    <p>Faça o seu cadastro, entre na plataforma e ajude pessoas a encontrarem casos da sua ONG.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041"> </FiArrowLeft>
                        Voltar para logon
                    </Link>

                </section>
                <form onSubmit={handleRegister} >
                    <input placeholder="Nome do ONG"                    value={name} onChange={e => setName(e.target.value)} />
                    <input type="email" placeholder="E-mail"            value={email} onChange={e => setEmail(e.target.value)} />
                    <input placeholder="WhatsApp"                       value={whatsapp} onChange={e => setWhatsapp(e.target.value)}/>
                    
                    <div className="input-group">
                        <input placeholder="Cidade"                     value={city} onChange={e => setCity(e.target.value)} />
                        <input placeholder="UF" style={{ width: 80 }}   value={uf} onChange={e => setUF(e.target.value)}/>
                    </div>
                    <button className="button"type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}