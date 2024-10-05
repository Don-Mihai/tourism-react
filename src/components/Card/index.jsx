import './Card.scss';
import { CardContent, Card as CardMui, Typography } from '@mui/material';

const Card = ({ imageUrl, title, text, onClick }) => {
  // const handleClick = (event) => {
  //   // останавливает дефолтное поведение (ссылки)
  //   event.preventDefault();
  //   onClick();
  // };

  return (
    <CardMui onClick={onClick} className="card-component">
      <CardContent>
        <img src={imageUrl} alt={title} className="card-component__image" />

        <Typography variant="h5">{title}</Typography>
        <Typography variant="body2">{text}</Typography>
      </CardContent>
    </CardMui>
  );
};

export default Card;
