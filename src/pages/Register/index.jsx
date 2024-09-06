import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.scss';
import axios from 'axios';

const initialValues = {
    name: '',
    email: '',
    password: '',
};

const Register = () => {
    const [formValues, setFormValues] = useState(initialValues);

    const navigate = useNavigate();

    const onChange = event => {
        const value = event.target.value;
        const key = event.target.name;
        setFormValues({ ...formValues, [key]: value });
    };

    const register = async () => {
        await axios.post('http://localhost:3001/users', formValues);
        navigate('/home');
    };

    return (
        <div className="register">
            <h2 className="register__title">Регистрация</h2>
            <div className="register__inputs">
                <input onChange={onChange} name="name" value={formValues.name} type="text" className="register__input" placeholder="Имя" />
                <input onChange={onChange} name="email" value={formValues.email} type="email" className="register__input" placeholder="Email" />
                <input onChange={onChange} name="password" value={formValues.password} type="password" className="register__input" placeholder="Пароль" />
            </div>
            <button onClick={register} className="register__button">
                Зарегистрироваться
            </button>
            <div className="register__footer">
                Уже есть аккаунт?{' '}
                <Link to="/auth" className="register__link">
                    Авторизируйтесь
                </Link>
            </div>
        </div>
    );
};

export default Register;
