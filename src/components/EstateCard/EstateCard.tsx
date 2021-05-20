import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Button, CardMedia, Container, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { BackIcon } from '../../assets/icons/BackIcon';
import { CloseIcon } from '../../assets/icons/CloseIcon';
import { NextIcon } from '../../assets/icons/NextIcon';
import { RootState } from '../../redux-store/store';
import { HouseData } from '../../types';

import { cnEstateCard } from './cn-EstateCard';

import './index.css';

const useStyles = makeStyles((theme) => ({
  mainFeaturesPostContent: {
    marginBottom: theme.spacing(4),
  },
  CardMedia: {
    paddingTop: '65%',
    cursor: 'pointer',
    padding: 0,
    margin: 0,
  },
}));

const EstateCard: React.FC = () => {
  const classes = useStyles();
  const properties = useSelector((state: RootState) => state.properties.properties) as HouseData[];

  const [showButton, setShowButton] = React.useState(true);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState<string>('');
  const [pictures, setPictures] = React.useState<string[]>([]);
  const [nextButton, setNextButton] = React.useState(true);
  const [backButton, setBackButton] = React.useState(true);

  const { id } = useParams<never>();
  const homeItem = properties.find((h: HouseData) => h.pk.toString() === id);
  const allImages = homeItem?.images;

  React.useEffect(() => {
    if (allImages === undefined) {
      return;
    }
    setPictures(allImages?.slice(0, 5));
  }, [allImages]);

  React.useEffect(() => {
    if (pictures.length === allImages?.length) {
      setShowButton(false);
    }
  }, [pictures.length, allImages?.length]);

  function handleShowButtonClick() {
    if (allImages === undefined) {
      return;
    }
    if (pictures.length !== allImages?.length) {
      setPictures(allImages);
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
    if (allImages === undefined) {
      return;
    }
    const indexCard = allImages.indexOf(image);
    if (indexCard === undefined) {
      return;
    }
    const nextCardIndex = indexCard + 1;
    const nextCard = allImages[nextCardIndex];
    if (nextCard === undefined) {
      return;
    }
    setSelectedImage(nextCard);
    if (allImages.length === undefined) {
      return;
    }
    if (indexCard === allImages.length - 2) {
      setNextButton(false);
    } else {
      setNextButton(true);
    }
    if (allImages.indexOf(nextCard) === 0) {
      setBackButton(false);
    } else {
      setBackButton(true);
    }
  }

  function handleShowButtonPrevious(image: string) {
    if (allImages === undefined) {
      return;
    }
    const indexCard = allImages.indexOf(image);
    if (indexCard === undefined) {
      return;
    }
    const previousCardIndex = indexCard - 1;
    const previousCard = allImages[previousCardIndex];
    if (previousCard === undefined) {
      return;
    }
    setSelectedImage(previousCard);
    if (previousCardIndex === 0) {
      setBackButton(false);
    } else {
      setBackButton(true);
    }
    if (allImages === undefined) {
      return;
    }
    if (allImages.indexOf(previousCard) === allImages.length - 1) {
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
            <h2>{homeItem?.name}</h2>
            <p>{homeItem?.city}</p>
            <p>{homeItem?.address}</p>

            <div className={cnEstateCard('GridContainer')}>
              {pictures.map((image: string) => (
                <div key={image ?? ''} className={cnEstateCard('GridItem')}>
                  <CardMedia
                    image={image}
                    className={classes.CardMedia}
                    onClick={() => {
                      handleImageClick(image);
                    }}
                  />
                </div>
              ))}
            </div>
            {showButton && <Button onClick={handleShowButtonClick}>Показать все фото</Button>}

            <Container maxWidth="md">
              <Grid container spacing={10}>
                <Grid item xs={6} sm={6} md={4}>
                  <p>Тип дома: {homeItem?.building_type}</p>
                  <p>Отделка: {homeItem?.decoration ? 'Есть' : 'Нет'}</p>
                  <p>Этаж: {homeItem?.floor}</p>
                  <p>Всего этажей в доме: {homeItem?.overall_floors}</p>
                  <p>Общая площадь: {homeItem?.overall_square}</p>
                </Grid>
                <Grid item xs={6} sm={6} md={4}>
                  <p>Жилая площадь: {homeItem?.living_square}</p>
                  <p>Площадь кухни: {homeItem?.kitchen_square}</p>
                  <p>Вид из окна: {homeItem?.view}</p>
                  <p>Балкон или лоджия: {homeItem?.balcony ? 'Есть' : 'Нет'}</p>
                </Grid>
              </Grid>
            </Container>
          </Container>
        </Paper>
      </div>

      <div className={cnEstateCard('ImagePopup', { opened: isImagePopupOpen })}>
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
            <span className={cnEstateCard('popupControllBtnImage')}>
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
            <span className={cnEstateCard('popupControllBtnImage')}>
              <NextIcon />
            </span>
          </button>
        )}
      </div>
    </>
  );
};

export default EstateCard;
