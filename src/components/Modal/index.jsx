import { Modal as ModalMui } from '@mui/material';
import ImageGallery from 'react-image-gallery';
import './Modal.scss';
import { useEffect, useState } from 'react';

const initialState = {
  title: '',
};

const Modal = ({ setIsOpen, isOpen, images = [], title, text, children }) => {
  const [formValues, setFormValues] = useState(initialState);

  useEffect(() => {
    setFormValues({ title });
  }, []);

  const onChange = (event) => {
    const value = event.target.value;
    const key = event.target.name;
    setFormValues({ ...formValues, [key]: value });
  };

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
          <input name="title" onChange={onChange} className="modal-component__input" type="text" value={formValues.title} />
          {/* <textarea name="" id="" value={text} placeholder="Введите текст..."></textarea> */}
          {children}
        </div>
      </div>
    </ModalMui>
  );
};

export default Modal;
