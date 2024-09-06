import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.scss';

const initialValues = {
    name: 'mihai',
    email: '',
    password: '',
};

const Register = () => {
    const [formValues, setFormValues] = useState(initialValues);

    const onChange = () => {};

    return (
        <div className="register">
            <h2 className="register__title">Регистрация</h2>
            <div className="register__inputs">
                <input onChange={onChange} value={formValues.name} type="text" className="register__input" placeholder="Имя" />
                <input onChange={onChange} value={formValues.email} type="email" className="register__input" placeholder="Email" />
                <input onChange={onChange} value={formValues.password} type="password" className="register__input" placeholder="Пароль" />
            </div>
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
