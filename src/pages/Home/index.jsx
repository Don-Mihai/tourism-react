import React, { useState } from 'react';
import { Button, TextField, CardContent, Typography, MenuItem } from '@mui/material';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import './Home.scss';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import moment from 'moment';
import Modal from '../../components/Modal';
import Card from '../../components/Card';

const HomePage = () => {
  const [dateStart, setDateStart] = useState('');
  const [dateEnd, setDateEnd] = useState('');
  const [interval, setInterval] = useState(0);

  const [isOpen, setIsOpen] = useState(false);
  const [activeCard, setActiveCard] = useState({});

  const openModal = () => {
    setIsOpen(true);
  };

  const selectActiveCard = (card) => {
    setActiveCard(card);
    openModal();
  };

  const handleDate = () => {
    const start = moment(dateStart.target?.value);
    const end = moment(dateEnd.target?.value);
    const interval = end.diff(start, 'days');
    console.log(interval);
    setInterval(interval);

    // const date = new Date(); //new - из темы классов, когда создается экземпляр класса. Создается тип данных date.
    //console.log(dateStart.target?.value, dateEnd.target?.value); //знак вопроса для того чтобы если нет value, то не было бы ошибки
  };

  console.log('home', isOpen);

  return (
    <>
      <div className="main-page">
        <Header />
        <header className="main-page__header">
          <div className="main-page__banner">
            <img
              width="100%"
              src="./img/beach.jpg"
              alt="Пляж Бали"
              className="main-page__header-image"
              style={{
                height: '100vh',
                objectFit: 'cover',
              }}
            />
            <div className="play">
              <a href="https://youtu.be/BFS9n4B_2xA?si=hMrxdcDxyim24BIq" target="_blank" rel="noopener noreferrer">
                <PlayCircleIcon style={{ fontSize: 80, color: '#f9ab30' }} />
              </a>
            </div>
          </div>
          <div className="main-page__cta">
            <Typography variant="h2" component="h1" gutterBottom className="main-page__header-title">
              Добро пожаловать на Бали
            </Typography>
            <Typography variant="body1" gutterBottom>
              Откройте для себя красоту Бали с нами. Забронируйте отдых, исследуйте достопримечательности и наслаждайтесь незабываемыми впечатлениями.
            </Typography>
            <Button onClick={openModal} variant="contained" color="primary" className="main-page__cta-button">
              Исследовать Бали
            </Button>
            <Modal isOpen={isOpen} title={activeCard.title} imageSrc={activeCard.imageSrc} setIsOpen={setIsOpen}></Modal>

            <div className="main-page__search">
              <TextField
                label="Искать направления"
                defaultValue="Искать направления"
                InputLabelProps={{ shrink: true }}
                variant="outlined"
                className="main-page__search-input"
                style={{ marginRight: '10px', flex: 1 }}
              />
              <TextField
                onChange={(e) => setDateStart(e)}
                label="Дата заезда"
                type="date"
                variant="outlined"
                InputLabelProps={{ shrink: true }}
                className="main-page__search-input"
                style={{ marginRight: '10px', flex: 1 }}
              />
              {Boolean(interval) && <span className="main-page__interval">Длительность: {interval} дн.</span>}
              {/* Если приходит false, дальше не проверяет. Если true, проверяет дальше. */}
              <TextField
                onChange={(e) => setDateEnd(e)}
                label="Дата выезда"
                type="date"
                variant="outlined"
                InputLabelProps={{ shrink: true }}
                className="main-page__search-input"
                style={{ marginRight: '10px', flex: 1 }}
              />
              <TextField
                select
                label="Лимит цены"
                variant="outlined"
                defaultValue="5000"
                className="main-page__search-input"
                style={{ marginRight: '10px', flex: 1 }}
              >
                <MenuItem value="5000">$5 000</MenuItem>
                <MenuItem value="10000">$10 000</MenuItem>
                <MenuItem value="20000">$20 000</MenuItem>
              </TextField>
              <Button
                onClick={handleDate}
                variant="contained"
                color="primary"
                className="main-page__cta-button"
                style={{ flex: 0, height: '56px', borderRadius: '50px' }}
              >
                Найти
              </Button>
            </div>
          </div>
        </header>

        <div className="main-page__section main-page__section--highlighted">
          <Typography variant="h4" gutterBottom>
            Популярные направления
          </Typography>
          <div className="main-page__cards">
            <Card title="Убуд" imageUrl="./img/ubud.jpg" text="Центр традиционных ремесел и танцев, окруженный пышной природой и храмами." />

            <Card
              title="Семиньяк"
              imageUrl="./img/seminiak.jpg"
              text="Яркий пляжный город, известный своими роскошными курортами, элитными бутиками и оживленной ночной жизнью."
            />

            <Card title="Нуса-Дуа" imageUrl="./img/nusa-dua.jpg" text="Уникальное место с мировыми курортами, песчаными пляжами и спокойными водами." />
          </div>
        </div>

        <div className="main-page__section">
          <Typography variant="h4" gutterBottom>
            Почему выбирают Бали
          </Typography>
          <div className="main-page__cards">
            <Card title="Удивительная природа" imageUrl="./img/nature.jpg" text="Откройте для себя потрясающие пейзажи, от пляжей до гор." />

            <Card title="Богатая культура" imageUrl="./img/culture.jpg" text="Исследуйте уникальные традиции Бали, храмы и церемонии." />

            <Card title="Роскошное проживание" imageUrl="./img/luxury.jpg" text="Останавливайтесь в известных на весь мир курортах, виллах и пляжных отелях." />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
