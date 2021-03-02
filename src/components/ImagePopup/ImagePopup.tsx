import React from 'react';

import { BackIcon } from '../../assets/icons/BackIcon';
import { CloseIcon } from '../../assets/icons/CloseIcon';
import { NextIcon } from '../../assets/icons/NextIcon';
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
  // const theme = useTheme();

  // const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);

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
        <CloseIcon />
        Закрыть
      </button>
      {backButton && (
        <button
          onClick={() => {
            previous(card);
          }}
          aria-label="Далее"
          type="button"
          className={cnImagePopup('popupImageBackButton')}
        >
          <span className={cnImagePopup('popupImageNextAndBackButtonSpan')}>
            <BackIcon />
          </span>
        </button>
      )}

      <div className={cnImagePopup('popupImageContainer')}>
        {/* classes={{ label: 'my-class-name' }} */}

        {/* <img src={card?.image ?? ''} alt="фото" className={cnImagePopup('popupImageImage')} /> */}
        <img src={card ?? ''} alt="фото" className={cnImagePopup('popupImageImage')} />
      </div>

      {nextButton && (
        <button
          onClick={() => {
            next(card);
          }}
          aria-label="Далее"
          type="button"
          className={cnImagePopup('popupImageNextButton')}
        >
          <span className={cnImagePopup('popupImageNextAndBackButtonSpan')}>
            <NextIcon />
          </span>
        </button>
      )}
    </div>
  );
};

export default ImagePopup;
