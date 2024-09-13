import React, { useEffect, useState } from 'react';
import { Avatar, TextField, Button } from '@mui/material';
import './UserProfile.scss';
import axios from 'axios';

const UserProfile = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    fetchUser();
  }, []); //нужен чтобы контролировать состояния компонентов, когда прогрузился обновился закрылся или когда меняется переменная

  const fetchUser = async () => {
    const id = localStorage.getItem('userId');
    const user = (await axios.get(`http://localhost:3001/users/${id}`)).data;
    setUser(user);
  };

  const onChange = (event) => {
    const value = event.target.value;
    const key = event.target.name;
    setUser({ ...user, [key]: value });
  };

  const onSave = async () => {
    axios.put(`http://localhost:3001/users/${user.id}`, user);
  };

  return (
    <div className="user-profile">
      <div className="user-profile__header">
        <Avatar alt="User Avatar" src={user.avatarUrl} className="user-profile__avatar" sx={{ width: 100, height: 100 }}>
          {/* if( user.name) {
            опциональная цепочка
            user.name[0]
          } else {
            undefined
          } */}
          {/* Знак вопроса после user - для надежности. А после name и lastName - это метод, но данные еще не получил и пытаается их получить из undefined  */}
          {user.name?.[0]}
          {user.lastName?.[0]}
        </Avatar>
        {/* путь до public */}
        {/* <img src="/arno.jpg" alt="" /> */}
        <h2 className="user-profile__title">User Profile</h2>
      </div>

      <form className="user-profile__form">
        <div className="user-profile__input-group">
          <label htmlFor="firstName" className="user-profile__label">
            First Name
          </label>
          <TextField onChange={onChange} name="name" value={user.name} id="firstName" variant="outlined" fullWidth className="user-profile__input" />
        </div>

        <div className="user-profile__input-group">
          <label htmlFor="lastName" className="user-profile__label">
            Last Name
          </label>
          <TextField onChange={onChange} name="lastName" value={user.lastName} id="lastName" variant="outlined" fullWidth className="user-profile__input" />
        </div>

        <div className="user-profile__input-group">
          <label htmlFor="email" className="user-profile__label">
            Email
          </label>
          <TextField onChange={onChange} name="email" value={user.email} id="email" variant="outlined" fullWidth className="user-profile__input" />
        </div>

        <div className="user-profile__input-group">
          <label htmlFor="phone" className="user-profile__label">
            Phone Number
          </label>
          <TextField onChange={onChange} name="phone" value={user.phone} id="phone" variant="outlined" fullWidth className="user-profile__input" />
        </div>

        <div className="user-profile__input-group">
          <label htmlFor="address" className="user-profile__label">
            Address
          </label>
          <TextField onChange={onChange} name="address" value={user.address} id="address" variant="outlined" fullWidth className="user-profile__input" />
        </div>

        <Button onClick={onSave} variant="contained" color="primary" className="user-profile__submit" fullWidth>
          Save Changes
        </Button>
      </form>
    </div>
  );
};

export default UserProfile;
