import React from 'react';
import { Button, TextField, Card, CardContent, Typography } from '@mui/material';
import './Home.scss';

import Header from '../../components/Header';

const homePage = () => {
  return (
    <>
      <Header />
      <div className="main-page">
        <header className="main-page__header">
          <img
            width="100%"
            src="./img/beach.jpg"
            alt="Пляж Бали"
            className="main-page__header-image"
            style={{
              height: '400px',
              objectFit: 'cover',
            }}
          />
          <Typography variant="h2" component="h1" gutterBottom className="main-page__header-title">
            Добро пожаловать на Бали
          </Typography>
          <Typography variant="body1" gutterBottom>
            Откройте для себя красоту Бали с нами. Забронируйте отдых, исследуйте достопримечательности и наслаждайтесь незабываемыми впечатлениями.
          </Typography>
          <Button variant="contained" color="primary" className="main-page__cta-button">
            Исследовать Бали
          </Button>
        </header>

        <div className="main-page__search">
          <TextField label="Искать направления" variant="outlined" fullWidth className="main-page__search-input" />
        </div>

        <div className="main-page__section main-page__section--highlighted">
          <Typography variant="h4" gutterBottom>
            Популярные направления
          </Typography>
          <div className="main-page__cards">
            <Card className="main-page__card">
              <CardContent>
                <img src="https://example.com/ubud.jpg" alt="Убуд" className="main-page__card-image" />
                <Typography variant="h5">Убуд</Typography>
                <Typography variant="body2">Центр традиционных ремесел и танцев, окруженный пышной природой и храмами.</Typography>
              </CardContent>
            </Card>
            <Card className="main-page__card">
              <CardContent>
                <img src="https://example.com/seminyak.jpg" alt="Семиньяк" className="main-page__card-image" />
                <Typography variant="h5">Семиньяк</Typography>
                <Typography variant="body2">
                  Яркий пляжный город, известный своими роскошными курортами, элитными бутиками и оживленной ночной жизнью.
                </Typography>
              </CardContent>
            </Card>
            <Card className="main-page__card">
              <CardContent>
                <img src="https://example.com/nusa-dua.jpg" alt="Нуса-Дуа" className="main-page__card-image" />
                <Typography variant="h5">Нуса-Дуа</Typography>
                <Typography variant="body2">Уникальное место с мировыми курортами, песчаными пляжами и спокойными водами.</Typography>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="main-page__section">
          <Typography variant="h4" gutterBottom>
            Почему выбирают Бали
          </Typography>
          <div className="main-page__features">
            <Card className="main-page__feature-card">
              <CardContent>
                <img src="https://example.com/nature.jpg" alt="Удивительная природа" className="main-page__feature-image" />
                <Typography variant="h6">Удивительная природа</Typography>
                <Typography variant="body2">Откройте для себя потрясающие пейзажи, от пляжей до гор.</Typography>
              </CardContent>
            </Card>
            <Card className="main-page__feature-card">
              <CardContent>
                <img src="https://example.com/culture.jpg" alt="Богатая культура" className="main-page__feature-image" />
                <Typography variant="h6">Богатая культура</Typography>
                <Typography variant="body2">Исследуйте уникальные традиции Бали, храмы и церемонии.</Typography>
              </CardContent>
            </Card>
            <Card className="main-page__feature-card">
              <CardContent>
                <img src="https://example.com/luxury.jpg" alt="Роскошное проживание" className="main-page__feature-image" />
                <Typography variant="h6">Роскошное проживание</Typography>
                <Typography variant="body2">Останавливайтесь в известных на весь мир курортах, виллах и пляжных отелях.</Typography>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default homePage;
