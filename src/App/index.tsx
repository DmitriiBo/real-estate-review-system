import React from 'react';

import '@fontsource/roboto';

import type { NilCard } from '../components/Card/Card';
import EstateCard from '../components/EstateCard/EstateCard';
import Header from '../components/Header';
import ImagePopup from '../components/ImagePopup/ImagePopup';
import { initialCardImage } from '../utils/utils';

import { cnApp } from './cn-app';

import './index.css';

export const App: React.FC = () => {
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState<NilCard>(null);
  const [pictures, setPictures] = React.useState<NilCard[]>([]);
  const [showButton, setShowButton] = React.useState(true);
  const [nextButton, setNextButton] = React.useState(true);
  const [backButton, setBackButton] = React.useState(true);
  const [cards] = React.useState<NilCard[]>(initialCardImage);

  React.useEffect(() => {
    setPictures(cards.slice(0, 6));
  }, [cards]);

  React.useEffect(() => {
    if (pictures.length === cards.length) {
      setShowButton(false);
    }
    // if (pictures.length === cards.length - 2) {
    //   setNextButton(false);
    // }
  }, [pictures.length, cards.length]);

  function handleShowButtonClick() {
    if (pictures.length !== cards.length) {
      setPictures(cards.slice(0, pictures.length + cards.length));
      setShowButton(false);
    }
  }

  function closeImagePopup() {
    setIsImagePopupOpen(false);
    setSelectedCard(null);
  }
  const handleCardClick = (card: NilCard) => {
    const indexCard = initialCardImage.indexOf(card);
    setSelectedCard(card);
    setIsImagePopupOpen(true);
    console.log(indexCard);
    if (indexCard === 0) {
      setBackButton(false);
    } else {
      setBackButton(true);
    }
    if (indexCard === cards.length - 2) {
      setNextButton(false);
    } else {
      setNextButton(true);
    }
  };

  function handleShowButtonNext(card: NilCard) {
    const indexCard = initialCardImage.indexOf(card);
    console.log(indexCard);
    const nextCardIndex = indexCard + 1;
    const nextCard = initialCardImage[nextCardIndex];
    setSelectedCard(nextCard);
    // console.log(cards.length);
    if (indexCard === cards.length - 2) {
      setNextButton(false);
    } else {
      setNextButton(true);
    }
    if (indexCard === 0) {
      setBackButton(false);
    } else {
      setBackButton(true);
    }
  }

  function handleShowButtonPrevious(card: NilCard) {
    const indexCard = initialCardImage.indexOf(card);
    const previousCardIndex = indexCard - 1;
    console.log(indexCard);
    const previousCard = initialCardImage[previousCardIndex];
    setSelectedCard(previousCard);
    if (indexCard === 0) {
      setBackButton(false);
    } else {
      setBackButton(true);
    }
    // if (indexCard > cards.length - 1) {
    //   setNextButton(true);
    // }
    if (indexCard === cards.length - 2) {
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
        nextButton={nextButton}
        backButton={backButton}
      />
    </div>
  );
};
