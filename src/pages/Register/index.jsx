import React from 'react';
import { Link } from 'react-router-dom';
import './Register.scss';

const Register = () => {
    return (
        <div className="register">
            <h2 className="register__title">Регистрация</h2>
            <div className="register__inputs">
                <input type="text" className="register__input" placeholder="Имя" />
                <input type="text" className="register__input" placeholder="Email" />
                <input type="password" className="register__input" placeholder="Пароль" />
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
