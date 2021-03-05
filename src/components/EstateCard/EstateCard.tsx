import React from 'react';
// import { Link, Route, Switch } from 'react-router-dom';
import { Button, CardMedia, Container, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { BackIcon } from '../../assets/icons/BackIcon';
import { CloseIcon } from '../../assets/icons/CloseIcon';
import { NextIcon } from '../../assets/icons/NextIcon';

import { cnEstateCard } from './cn-EstateCard';

import './index.css';

const useStyles = makeStyles((theme) => ({
  mainFeaturesPostContent: {
    marginBottom: theme.spacing(4),
  },
  CardMedia: {
    paddingTop: '100%',
    cursor: 'pointer',
  },
}));

interface EstateHouseProps {
  title?: string;
  place?: string;
  typeHouse?: string;
  houseRepairs?: string;
  floor?: string;
  totalArea?: string;
  livingSpace?: string;
  kitchenArea?: string;
  view?: string;
  balconyOrLoggia?: string;
  images: string[];
}

const EstateCard: React.FC<EstateHouseProps> = ({
  title,
  place,
  typeHouse,
  houseRepairs,
  floor,
  totalArea,
  livingSpace,
  kitchenArea,
  view,
  balconyOrLoggia,
  images,
}) => {
  const classes = useStyles();

  const [showButton, setShowButton] = React.useState(true);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState<string>('');
  const [pictures, setPictures] = React.useState<string[]>([]);
  const [nextButton, setNextButton] = React.useState(true);
  const [backButton, setBackButton] = React.useState(true);

  React.useEffect(() => {
    setPictures(images.slice(0, 6));
  }, [images]);

  React.useEffect(() => {
    if (pictures.length === images.length) {
      setShowButton(false);
    }
  }, [pictures.length, images.length]);

  function handleShowButtonClick() {
    if (pictures.length !== images.length) {
      setPictures(images.slice(0, pictures.length + images.length));
      setShowButton(false);
    }
  }

  function closeImagePopup() {
    setIsImagePopupOpen(false);
    setSelectedImage('');
  }

  const handleImageClick = (image: string) => {
    const indexCard = pictures.indexOf(image);
    setSelectedImage(image);
    setIsImagePopupOpen(true);
    if (indexCard === 0) {
      setBackButton(false);
    } else {
      setBackButton(true);
    }
    if (pictures === undefined) {
      return;
    }
    if (indexCard === pictures.length - 1) {
      setNextButton(false);
    } else {
      setNextButton(true);
    }
  };

  function handleShowButtonNext(image: string) {
    const indexCard = images.indexOf(image);
    if (indexCard === undefined) {
      return;
    }
    const nextCardIndex = indexCard + 1;
    const nextCard = images[nextCardIndex];
    if (nextCard === undefined) {
      return;
    }
    setSelectedImage(nextCard);
    if (images.length === undefined) {
      return;
    }
    if (indexCard === images.length - 2) {
      setNextButton(false);
    } else {
      setNextButton(true);
    }
    if (images.indexOf(nextCard) === 0) {
      setBackButton(false);
    } else {
      setBackButton(true);
    }
  }

  function handleShowButtonPrevious(image: string) {
    const indexCard = images.indexOf(image);
    if (indexCard === undefined) {
      return;
    }
    const previousCardIndex = indexCard - 1;
    const previousCard = images[previousCardIndex];
    if (previousCard === undefined) {
      return;
    }
    setSelectedImage(previousCard);
    if (previousCardIndex === 0) {
      setBackButton(false);
    } else {
      setBackButton(true);
    }
    if (images === undefined) {
      return;
    }
    if (images.indexOf(previousCard) === images.length - 1) {
      setNextButton(false);
    } else {
      setNextButton(true);
    }
  }

  React.useEffect(() => {
    function handleEscClose(evt: KeyboardEvent) {
      if (evt.key === 'Escape') {
        closeImagePopup();
      }
    }

    function closeByOverlayClick(evt: MouseEvent) {
      if ((evt.target as Element).classList?.contains(cnEstateCard('popupImageOverlay'))) {
        closeImagePopup();
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
    <>
      <div className={cnEstateCard()}>
        <Paper>
          <Container maxWidth="md">
            <h2>{title}</h2>
            <p>{place}</p>

            <Grid container spacing={1}>
              {pictures.map((image: string) => (
                <Grid item xs={6} sm={6} md={4}>
                  <CardMedia
                    key={image ?? ''}
                    image={image}
                    className={classes.CardMedia}
                    onClick={() => {
                      handleImageClick(image);
                    }}
                  />
                </Grid>
              ))}
            </Grid>
            {showButton && <Button onClick={handleShowButtonClick}>Показать все фото</Button>}

            <Container maxWidth="md">
              <Grid container spacing={10}>
                <Grid item xs={6} sm={6} md={4}>
                  <p>Тип дома: {typeHouse}</p>
                  <p>Отделка: {houseRepairs}</p>
                  <p>Этаж: {floor}</p>
                  <p>Общая площадь: {totalArea}</p>
                </Grid>
                <Grid item xs={6} sm={6} md={4}>
                  <p>Жилая площадь: {livingSpace}</p>
                  <p>Площадь кухни: {kitchenArea}</p>
                  <p>Вид из окна: {view}</p>
                  <p>Балкон или лоджия: {balconyOrLoggia}</p>
                </Grid>
              </Grid>
            </Container>
          </Container>
        </Paper>
      </div>

      <div
        className={isImagePopupOpen ? cnEstateCard('popupImageOpened') : cnEstateCard('ImagePopup')}
      >
        <div className={cnEstateCard('popupImageOverlay')} />
        <button
          type="button"
          onClick={closeImagePopup}
          className={cnEstateCard('popupImageCloseButton')}
        >
          <CloseIcon />
          Закрыть
        </button>
        {backButton && (
          <button
            onClick={() => {
              handleShowButtonPrevious(selectedImage);
            }}
            aria-label="Далее"
            type="button"
            className={cnEstateCard('popupImageBackButton')}
          >
            <span className={cnEstateCard('popupImageNextAndBackButtonSpan')}>
              <BackIcon />
            </span>
          </button>
        )}

        <div className={cnEstateCard('popupImageContainer')}>
          <img src={selectedImage ?? ''} alt="фото" className={cnEstateCard('popupImageImage')} />
        </div>

        {nextButton && (
          <button
            onClick={() => {
              handleShowButtonNext(selectedImage);
            }}
            aria-label="Далее"
            type="button"
            className={cnEstateCard('popupImageNextButton')}
          >
            <span className={cnEstateCard('popupImageNextAndBackButtonSpan')}>
              <NextIcon />
            </span>
          </button>
        )}
      </div>
    </>
  );
};

export default EstateCard;
