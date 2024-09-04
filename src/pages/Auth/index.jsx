import { Link } from "react-router-dom";

const Auth = () => {
  return (
    <div>
      <h2>Авторизация</h2>

      <div className="inputs">
        <input type="text" />
        <input type="text" />
      </div>

      <div>
        Нет аккаунта? <Link to="/register">Зарегистрируйтесь</Link>
      </div>
    </div>
  );
};

export default Auth;
