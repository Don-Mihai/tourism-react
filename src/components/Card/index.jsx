import './Card.scss';
import { CardContent, Card as CardMui, Typography } from '@mui/material';

const Card = ({ imageUrl, title, text }) => {
  return (
    <CardMui className="card-component">
      <CardContent>
        <a href={imageUrl} target="_blank" rel="noopener noreferrer">
          <img src={imageUrl} alt={title} className="card-component__image" />
        </a>

        <Typography variant="h5">{title}</Typography>
        <Typography variant="body2">{text}</Typography>
      </CardContent>
    </CardMui>
  );
};

export default Card;
