import React from 'react';

import '@fontsource/roboto';

import { Card } from '../components/Card/Card';
import EstateCard from '../components/EstateCard/EstateCard';
import Header from '../components/Header';
import ImagePopup from '../components/ImagePopup/ImagePopup';
import { initialCardImage } from '../utils/utils';

import { cnApp } from './cn-app';

import './index.css';

export const App: React.FC = () => {
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [pictures, setPictures] = React.useState([]);
  const [showButton, setShowButton] = React.useState(true);
  const [cards, setCards] = React.useState(initialCardImage);

  React.useEffect(() => {
    setPictures(cards.slice(0, 6));
  }, []);

  function handleShowButtonClick() {
    setPictures(cards.slice(0, pictures.length + cards.length));
    if ((pictures.length = cards.length)) {
      setShowButton(false);
    }
  }

  function closeImagePopup() {
    setIsImagePopupOpen(false);
    setSelectedCard({});
  }

  const handleCardClick = (card: Record<string, unknown>) => {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  };

  function handleShowButtonNext(card: Card) {
    const indexCard = initialCardImage.indexOf(card.image);
    console.log(indexCard);
    setSelectedCard(card[indexCard]);
  }

  function handleShowButtonPrevious(card: Card) {
    const indexCard = initialCardImage.indexOf(card.image);
    console.log(initialCardImage.indexOf(image));
    // setSelectedCard(selectedCard[initialCardImage.indexOf(card) - 1]);
    setSelectedCard(card[indexCard]);
  }

  return (
    <div className={cnApp()}>
      <p className={cnApp('Title')}>Real Estate Review System</p>
      <Header title="Main" />
      <EstateCard
        handleCardClick={handleCardClick}
        title="4-к. апартаменты, 415,8 м², 13/13 эт."
        place="Moscow, Россия, ул. Новый Арбат, д. 32"
        pictures={pictures}
        showButton={showButton}
        handleShowButtonClick={handleShowButtonClick}
        initialCardImage={initialCardImage}
      />
      <ImagePopup
        card={selectedCard}
        isOpen={isImagePopupOpen}
        onClose={closeImagePopup}
        next={handleShowButtonNext}
        previous={handleShowButtonPrevious}
      />
    </div>
  );
};
