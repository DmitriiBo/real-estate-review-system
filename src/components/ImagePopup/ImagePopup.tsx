import React from 'react';
import { Button } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import type { NilCard } from '../Card/Card';

import { cnImagePopup } from './cn-ImagePopup';

import './index.css';

interface ImagePopupProps {
  next(card: NilCard): void;
  previous(card: NilCard): void;
  card: NilCard;
  isOpen: boolean;
  onClose(): void;
  nextButton: boolean;
  backButton: boolean;
}

const ImagePopup: React.FC<ImagePopupProps> = ({
  isOpen,
  onClose,
  card,
  next,
  previous,
  backButton,
  nextButton,
}) => {
  const theme = useTheme();

  React.useEffect(() => {
    function handleEscClose(evt: KeyboardEvent) {
      if (evt.key === 'Escape') {
        onClose();
      }
    }

    function closeByOverlayClick(evt: MouseEvent) {
      if ((evt.target as Element).classList?.contains(cnImagePopup('popupImageOverlay'))) {
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

  // &nbsp;
  return (
    <div className={isOpen ? cnImagePopup('popupImageOpened') : cnImagePopup()}>
      <div className={cnImagePopup('popupImageOverlay')} />
      <button type="button" onClick={onClose} className={cnImagePopup('popupImageCloseButton')}>
        <svg
          viewBox="0 0 12 12"
          role="presentation"
          aria-hidden="true"
          focusable="false"
          className={cnImagePopup('popupImageCloseButtonSvg')}
        >
          <path
            d="m11.5 10.5c.3.3.3.8 0 1.1s-.8.3-1.1 0l-4.4-4.5-4.5 4.5c-.3.3-.8.3-1.1 0s-.3-.8 0-1.1l4.5-4.5-4.4-4.5c-.3-.3-.3-.8 0-1.1s.8-.3 1.1 0l4.4 4.5 4.5-4.5c.3-.3.8-.3 1.1 0s .3.8 0 1.1l-4.5 4.5z"
            fillRule="evenodd"
          />
        </svg>
        Закрыть
      </button>
      <div className={cnImagePopup('popupImageConteiner')}>
        {backButton && (
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
        )}
        <img src={card?.image ?? ''} alt="фото" className={cnImagePopup('popupImageImage')} />
        {nextButton && (
          <Button
            size="large"
            onClick={() => {
              next(card);
            }}
          >
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        )}
      </div>
    </div>
  );
};

export default ImagePopup;
