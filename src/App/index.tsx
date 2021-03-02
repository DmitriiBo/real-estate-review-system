import React from 'react';

import '@fontsource/roboto';

import type { NilCard } from '../components/Card/Card';
import EstateCard from '../components/EstateCard/EstateCard';
import Header from '../components/Header';
import ImagePopup from '../components/ImagePopup/ImagePopup';
// import { mockCardImages } from '../mocks/mock-properties-data';
import { mockCardData } from '../mocks/mock-properties-data';

import { cnApp } from './cn-app';

import './index.css';

export const App: React.FC = () => {
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState<NilCard>(null);
  const [pictures, setPictures] = React.useState<NilCard[]>([]);
  const [showButton, setShowButton] = React.useState(true);
  const [nextButton, setNextButton] = React.useState(true);
  const [backButton, setBackButton] = React.useState(true);

  const cardImages = mockCardData[0]?.images;
  console.log(cardImages);

  React.useEffect(() => {
    setPictures(cardImages.slice(0, 6));
  }, [cardImages]);

  React.useEffect(() => {
    if (pictures.length === cardImages?.length) {
      setShowButton(false);
    }
  }, [pictures.length, cardImages?.length]);

  function handleShowButtonClick() {
    if (pictures.length !== cardImages?.length) {
      setPictures(cardImages?.slice(0, pictures.length + cardImages?.length));
      setShowButton(false);
    }
  }

  function closeImagePopup() {
    setIsImagePopupOpen(false);
    setSelectedCard(null);
  }
  const handleCardClick = (card: NilCard) => {
    const indexCard = cardImages?.indexOf(card);
    setSelectedCard(card);
    setIsImagePopupOpen(true);
    if (indexCard === 0) {
      setBackButton(false);
    } else {
      setBackButton(true);
    }
    if (indexCard === cardImages.length - 1) {
      setNextButton(false);
    } else {
      setNextButton(true);
    }
  };

  function handleShowButtonNext(card: NilCard) {
    const indexCard = cardImages.indexOf(card);
    const nextCardIndex = indexCard + 1;
    const nextCard = cardImages[nextCardIndex];
    setSelectedCard(nextCard);
    if (indexCard === cardImages.length - 2) {
      setNextButton(false);
    } else {
      setNextButton(true);
    }
    if (cardImages.indexOf(nextCard) === 0) {
      setBackButton(false);
    } else {
      setBackButton(true);
    }
  }

  function handleShowButtonPrevious(card: NilCard) {
    const indexCard = cardImages.indexOf(card);
    const previousCardIndex = indexCard - 1;
    const previousCard = cardImages[previousCardIndex];
    setSelectedCard(previousCard);
    if (previousCardIndex === 0) {
      setBackButton(false);
    } else {
      setBackButton(true);
    }
    if (cardImages.indexOf(previousCard) === cardImages.length - 1) {
      setNextButton(false);
    } else {
      setNextButton(true);
    }
  }

  return (
    <div className={cnApp()}>
      <p className={cnApp('Title')}>Real Estate Review System</p>
      <Header title="Main" />
      <EstateCard
        handleCardClick={handleCardClick}
        pictures={pictures}
        showButton={showButton}
        handleShowButtonClick={handleShowButtonClick}
        cardImages={cardImages}
      />
      <ImagePopup
        card={selectedCard}
        isOpen={isImagePopupOpen}
        onClose={closeImagePopup}
        next={handleShowButtonNext}
        previous={handleShowButtonPrevious}
        nextButton={nextButton}
        backButton={backButton}
      />
    </div>
  );
};
