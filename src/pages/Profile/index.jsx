import React from 'react';
import { Avatar, TextField, Button } from '@mui/material';
import './UserProfile.scss';

const UserProfile = () => {
  return (
    <div className="user-profile">
      <div className="user-profile__header">
        <Avatar alt="User Avatar" src="/static/images/avatar/1.jpg" className="user-profile__avatar" sx={{ width: 100, height: 100 }} />
        <h2 className="user-profile__title">User Profile</h2>
      </div>

      <form className="user-profile__form">
        <div className="user-profile__input-group">
          <label htmlFor="firstName" className="user-profile__label">
            First Name
          </label>
          <TextField id="firstName" variant="outlined" fullWidth className="user-profile__input" />
        </div>

        <div className="user-profile__input-group">
          <label htmlFor="lastName" className="user-profile__label">
            Last Name
          </label>
          <TextField id="lastName" variant="outlined" fullWidth className="user-profile__input" />
        </div>

        <div className="user-profile__input-group">
          <label htmlFor="email" className="user-profile__label">
            Email
          </label>
          <TextField id="email" variant="outlined" fullWidth className="user-profile__input" />
        </div>

        <div className="user-profile__input-group">
          <label htmlFor="phone" className="user-profile__label">
            Phone Number
          </label>
          <TextField id="phone" variant="outlined" fullWidth className="user-profile__input" />
        </div>

        <div className="user-profile__input-group">
          <label htmlFor="address" className="user-profile__label">
            Address
          </label>
          <TextField id="address" variant="outlined" fullWidth className="user-profile__input" />
        </div>

        <Button variant="contained" color="primary" className="user-profile__submit" fullWidth>
          Save Changes
        </Button>
      </form>
    </div>
  );
};

export default UserProfile;
