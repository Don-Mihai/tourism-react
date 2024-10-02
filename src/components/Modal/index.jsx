import { Modal as ModalMui } from '@mui/material';
import './Modal.scss';

const Modal = ({ setIsOpen, isOpen, imageSrc, title }) => {
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <ModalMui open={isOpen} onClose={closeModal}>
      <div className="modal-component">
        <a href={imageSrc} className="main-page__card__photoview" target="_blank" rel="noopener noreferrer">
          <img src={imageSrc} alt={title} className="main-page__card-image" />
        </a>

        <div className="modal-component__content">
          <h3>{title}</h3>
        </div>
      </div>
    </ModalMui>
  );
};

export default Modal;
