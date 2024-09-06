import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.scss';
import axios from 'axios';

const initialValues = {
    email: '',
    password: '',
};

const Auth = () => {
    const [formValues, setFormValues] = useState(initialValues);

    const navigate = useNavigate();

    const onChange = event => {
        const value = event.target.value;
        const key = event.target.name;
        setFormValues({ ...formValues, [key]: value });
    };

    const auth = async () => {
        if (formValues.email === '' || formValues.password === '') {
            alert('Введите обязательные значения!');
            return;
        }

        const user = (await axios.get(`http://localhost:3001/users?email=${formValues.email}&password=${formValues.password}`)).data[0];

        if (user) navigate('/home');
    };

    return (
        <div className="auth">
            <h2 className="auth__title">Авторизация</h2>
            <div className="auth__inputs">
                <input required onChange={onChange} name="email" value={formValues.email} type="email" className="auth__input" placeholder="Email" />
                <input required onChange={onChange} name="password" value={formValues.password} type="password" className="auth__input" placeholder="Пароль" />
            </div>
            <button onClick={auth} className="auth__button">
                Войти
            </button>
            <div className="auth__footer">
                Нет аккаунта?{' '}
                <Link to="/auth" className="auth__link">
                    Зарегистрируйтесь
                </Link>
            </div>
        </div>
    );
};

export default Auth;
