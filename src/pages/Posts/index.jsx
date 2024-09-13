import React from "react";

const Posts = () => {
  return (
    <div className="posts">
      <h2 className="posts__title">Посты о путешествиях</h2>
      <ul className="posts__list">
        <li className="posts__item">
          <img
            className="posts__image"
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Цель путешествия 1"
          />
          <h3 className="posts__subtitle">Исследуйте горы</h3>
          <p className="posts__description">
            Присоединяйтесь к нам в путешествии по красивым горам Японии.
          </p>
        </li>
        <li className="posts__item">
          <img
            className="posts__image"
            src="https://images.unsplash.com/photo-1516972811507-4443f266a197?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Цель путешествия 2"
          />
          <h3 className="posts__subtitle">Исследуйте пустыню</h3>
          <p className="posts__description">
            Исследуйте уникальную красоту Сахары в Марокко.
          </p>
        </li>
        <li className="posts__item">
          <img
            className="posts__image"
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Цель путешествия 3"
          />
          <h3 className="posts__subtitle">Исследуйте побережье</h3>
          <p className="posts__description">
            Отдохните на прекрасных пляжах Карибских островов.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Posts;
