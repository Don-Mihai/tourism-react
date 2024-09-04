import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h2>Регистрация</h2>

            <div className="inputs">
                <input type="text" />
                <input type="text" />
            </div>

            <div>
                Уже есть аккаунт? <Link to="/auth">Авторизируйтесь</Link>
            </div>
        </div>
    );
};

export default Register;
