import { Modal as ModalMui } from '@mui/material';
import ImageGallery from 'react-image-gallery';
import './Modal.scss';
import { useEffect, useState } from 'react';

const Modal = ({ setIsOpen, isOpen, imageSrc, title }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (typeof imageSrc === 'string') {
      setImages([{ original: imageSrc }]);
    } else {
      setImages(imageSrc?.map?.((src) => ({ original: src })));
    }
  }, [imageSrc, title]);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <ModalMui open={isOpen} onClose={closeModal}>
      <div className="modal-component">
        {/* <a href={imageSrc} className="main-page__card__photoview" target="_blank" rel="noopener noreferrer">
          <img src={imageSrc} alt={title} className="main-page__card-image" />
        </a> */}
        <ImageGallery items={images} />

        <div className="modal-component__content">
          <h3>{title}</h3>
        </div>
      </div>
    </ModalMui>
  );
};

export default Modal;
