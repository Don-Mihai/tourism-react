import React, { useEffect, useState } from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Rating } from '@mui/material';
import './HotelsPage.scss';
import axios from 'axios';
import Header from '../../components/Header';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../../redux/counter';

const HotelsPage = () => {
  const [hotels, setHotels] = useState([]);
  const value = useSelector((store) => store.counter.value);
  const dispatch = useDispatch();

  useEffect(() => {
    getHotels();
  }, []);

  const getHotels = async () => {
    const hotels = (await axios.get('http://localhost:3001/hotels')).data;
    setHotels(hotels);
  };

  const handlePlus = () => {
    dispatch(increment());
  };

  const handleMinus = () => {
    dispatch(decrement());
  };

  return (
    <>
      <Header />
      <div className="counter">
        <button onClick={handlePlus}>+</button>
        <button onClick={handleMinus}>-</button>
        {value}
      </div>
      <div className="hotels-page">
        <h1 className="hotels-page__title">Hotels in Sri Lanka</h1>
        <div className="hotels-page__list">
          {hotels.map((hotel) => (
            <div key={hotel.id} className="hotels-page__card">
              <Card>
                <CardMedia component="img" height="194" image={hotel.image} alt={hotel.name} />
                <CardContent>
                  <Typography variant="h5" component="div">
                    {hotel.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {hotel.description}
                  </Typography>
                </CardContent>
                <Rating className="hotels-page__stars" name="read-only" value={hotel.rating} readOnly />
                <Button variant="contained" color="primary">
                  Book Now
                </Button>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HotelsPage;
