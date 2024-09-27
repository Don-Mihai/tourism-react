import { Link } from 'react-router-dom';
import './Header.scss';
import { Avatar, Menu, MenuItem, ListItemIcon, Divider } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../../redux/counter';

import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { fetchUserById } from '../../redux/user';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const fetchedUser = useSelector((store) => store.user.user);

  const dispatch = useDispatch();
  const handlePlus = () => {
    dispatch(increment());
  };

  const handleMinus = () => {
    dispatch(decrement());
  };

  const open = Boolean(anchorEl);

  useEffect(() => {
    dispatch(fetchUserById());
    // fetchUser();
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // const fetchUser = async () => {
  //   const id = localStorage.getItem('userId');

  //   try {
  //     const user = (await axios.get(`http://localhost:3001/users/${id}`)).data;
  //     setUser(user);
  //   } catch (error) {}
  // };

  const logout = () => {
    localStorage.clear();
    handleClose();
  };

  return (
    <header className="header">
      <div className="counter">
        <button onClick={handlePlus}>+</button>
        <button onClick={handleMinus}>-</button>
      </div>
      <Link className="header__logo" to={'/home'}>
        <img src="/path/to/logo.png" alt="" />
        <span className="header__title">Rhythm Tourism</span>
      </Link>

      <nav className="header__menu">
        <Link to={'/home'}>Главная</Link>
        <Link to={'/about'}>О нас</Link>
        <Link to={'/posts'}>Посты</Link>
        <Link to={'/hotels'}>Отели</Link>
      </nav>

      <div className="header__user">
        {/* <Link to={'/profile'}> */}
        <Avatar onClick={handleClick} src={fetchedUser.avatarUrl}></Avatar>
        {/* </Link> */}
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          slotProps={{
            paper: {
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&::before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <Link to={'/profile'}>
            <MenuItem onClick={handleClose}>
              <Avatar className="avatar" /> Profile
            </MenuItem>
          </Link>

          <MenuItem onClick={logout}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </div>
    </header>
  );
};

export default Header;
