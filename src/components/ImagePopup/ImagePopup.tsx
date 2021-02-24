import React from 'react';
import { Button } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import { Card } from '../Card/Card';

import { cnImagePopup } from './cn-ImagePopup';

import './index.css';

interface ImagePopupProps {
  next(card: Card): void;
  previous(card: Card): void;
  card: never;
  isOpen: boolean;
  onClose(): void;
}

const ImagePopup: React.FC<ImagePopupProps> = ({ isOpen, onClose, card, next, previous }) => {
  const theme = useTheme();

  React.useEffect(() => {
    function handleEscClose(evt: React.KeyboardEvent) {
      if (evt.key === 'Escape') {
        onClose();
      }
    }

    function closeByOverlayClick(evt: React.ChangeEvent) {
      if (evt.target.classList.contains(cnImagePopup('popupImageOverlay'))) {
        onClose();
      }
    }

    document.addEventListener('keydown', handleEscClose);
    document.addEventListener('click', closeByOverlayClick);

    return () => {
      document.removeEventListener('keydown', handleEscClose);
      document.removeEventListener('click', closeByOverlayClick);
    };
  });

  return (
    // <div className={cnImagePopup() isOpen && 'popupImageOpened'}>
    <div className={`imagePopup ${isOpen && 'popupImageOpened'}`}>
      <div className={cnImagePopup('popupImageOverlay')} />
      <button
        type="button"
        label="close"
        onClick={onClose}
        className={cnImagePopup('popupImageCloseButton')}
      />
      <div className={cnImagePopup('popupImageConteiner')}>
        <Button
          size="large"
          classes={{ label: 'my-class-name' }}
          onClick={() => {
            previous(card);
          }}
        >
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          Back
        </Button>
        <img src={card.image} alt="фото" className={cnImagePopup('popupImageImage')} />
        <Button
          size="large"
          onClick={() => {
            next(card);
          }}
        >
          Next
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </Button>
      </div>
    </div>
  );
};

export default ImagePopup;
