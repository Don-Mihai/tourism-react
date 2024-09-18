import React, { useEffect, useState } from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Rating } from '@mui/material';
import './HotelsPage.scss';
import axios from 'axios';

const hotels = [
  {
    id: 1,
    name: 'Hotel A',
    description: 'A beautiful hotel in Colombo.',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/20/39/92/rayavadee-swimmimg-pool.jpg?w=1200&h=-1&s=1',
    rating: 5,
  },
  {
    id: 2,
    name: 'Hotel B',
    description: 'A luxurious hotel in Kandy.',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/52/0a/54/manta-pool.jpg?w=1200&h=-1&s=1',
    rating: 4,
  },
  // Add more hotels as needed
];

const HotelsPage = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    getHotels();
  }, []);

  const getHotels = async () => {
    const hotels = (await axios.get('http://localhost:3001/hotels')).data;
    setHotels(hotels);
  };
  return (
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
  );
};

export default HotelsPage;
