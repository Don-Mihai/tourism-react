import { Modal as ModalMui } from '@mui/material';
import ImageGallery from 'react-image-gallery';
import './Modal.scss';
import { useEffect, useState } from 'react';

const Modal = ({ setIsOpen, isOpen, images = [], title, text, children }) => {
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <ModalMui open={isOpen} onClose={closeModal}>
      <div className="modal-component">
        {/* <a href={imageSrc} className="main-page__card__photoview" target="_blank" rel="noopener noreferrer">
          <img src={imageSrc} alt={title} className="main-page__card-image" />
        </a> */}
        <ImageGallery items={Array.isArray(images) ? images : []} />

        <div className="modal-component__content">
          {/* <h3>{title}</h3> */}
          <input type="text" value={title} />
          <textarea name="" id="" value={text} placeholder="Введите текст..."></textarea>
          {children}
        </div>
      </div>
    </ModalMui>
  );
};

export default Modal;
