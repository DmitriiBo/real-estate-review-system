import React from 'react';

import '@fontsource/roboto';

import EstateCard from '../components/EstateCard/EstateCard';
import Header from '../components/Header';
import type { NilHouseData } from '../components/HouseData/HouseData';
import ImagePopup from '../components/ImagePopup/ImagePopup';
import { mockHomesData } from '../mocks/mock-properties-data';

import { cnApp } from './cn-app';

import './index.css';

export const App: React.FC = () => {
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState<string>('');
  const [pictures, setPictures] = React.useState<string[]>([]);
  const [house, setHouse] = React.useState<NilHouseData>(null);
  const [showButton, setShowButton] = React.useState(true);
  const [nextButton, setNextButton] = React.useState(true);
  const [backButton, setBackButton] = React.useState(true);

  function setResults(housedata: NilHouseData) {
    if (housedata == null) {
      return;
    }
    setPictures(housedata.images.slice(0, 6));
    setHouse(housedata);
  }

  React.useEffect(() => {
    // Test data
    setResults(mockHomesData[0]);
  }, []);

  React.useEffect(() => {
    if (pictures.length === house?.images?.length) {
      setShowButton(false);
    }
  }, [house?.images?.length, pictures.length]);

  function handleShowButtonClick() {
    if (house?.images?.length === undefined) {
      return;
    }
    if (pictures.length !== house?.images?.length) {
      setPictures(pictures.slice(0, pictures.length + house?.images?.length));
      setShowButton(false);
    }
  }

  function closeImagePopup() {
    setIsImagePopupOpen(false);
    setSelectedImage('');
  }

  // const handleImageClick = (image: NilHouseData) => {
  const handleImageClick = (image: string) => {
    const indexCard = house?.images?.indexOf(image);
    setSelectedImage(image);
    setIsImagePopupOpen(true);
    if (indexCard === 0) {
      setBackButton(false);
    } else {
      setBackButton(true);
    }
    if (house?.images?.length === undefined) {
      return;
    }
    if (indexCard === house?.images?.length - 1) {
      setNextButton(false);
    } else {
      setNextButton(true);
    }
  };

  function handleShowButtonNext(image: string) {
    const indexCard = house?.images?.indexOf(image);
    if (indexCard === undefined) {
      return;
    }
    const nextCardIndex = indexCard + 1;
    const nextCard = house?.images[nextCardIndex];
    if (nextCard === undefined) {
      return;
    }
    setSelectedImage(nextCard);
    if (house?.images?.length === undefined) {
      return;
    }
    if (indexCard === house?.images?.length - 2) {
      setNextButton(false);
    } else {
      setNextButton(true);
    }
    if (house?.images?.indexOf(nextCard) === 0) {
      setBackButton(false);
    } else {
      setBackButton(true);
    }
  }

  function handleShowButtonPrevious(image: string) {
    const indexCard = house?.images?.indexOf(image);
    if (indexCard === undefined) {
      return;
    }
    const previousCardIndex = indexCard - 1;
    const previousCard = house?.images[previousCardIndex];
    if (previousCard === undefined) {
      return;
    }
    setSelectedImage(previousCard);
    if (previousCardIndex === 0) {
      setBackButton(false);
    } else {
      setBackButton(true);
    }
    if (house?.images?.length === undefined) {
      return;
    }
    if (house?.images?.indexOf(previousCard) === house?.images?.length - 1) {
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
        handleImageClick={handleImageClick}
        // pictures={pictures}
        showButton={showButton}
        handleShowButtonClick={handleShowButtonClick}
      />
      <ImagePopup
        image={selectedImage}
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
