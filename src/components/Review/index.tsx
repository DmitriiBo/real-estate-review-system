import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import BookmarkBorderSharpIcon from '@material-ui/icons/BookmarkBorderSharp';
import CommentIcon from '@material-ui/icons/Comment';
import ThumbUpAlt from '@material-ui/icons/ThumbUpAlt';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import Rating from '@material-ui/lab/Rating';

import { mockReviews as cards } from '../../mocks/review-mock-data';
import getResultWord from '../../utils/getResultWord';

import { cnReview } from './cn-review';
import useStyles from './use-styles';

type ReviewProps = {
  adress: string;
};

const Review: React.FC<ReviewProps> = ({ adress }) => {
  const getResultRequestString = (res: number) => {
    if (cards.length) {
      return `${getResultWord(res, [
        'результат',
        'результата',
        'результатов',
      ])} ${'найдено по запросу'} ${adress}`;
    }

    return 'Ничего не найдено';
  };

  const classes = useStyles();
  return (
    <div className={cnReview()}>
      <Container className={classes.cardGrid}>
        <Grid container className={classes.header}>
          <Grid spacing={4} className={classes.header__text}>
            <Typography variant="h5">{getResultRequestString(cards.length)}</Typography>
          </Grid>
          <Grid item>
            <IconButton aria-label="Сохранить этот поиск">
              <BookmarkBorderSharpIcon fontSize="large" />
            </IconButton>
          </Grid>
        </Grid>

        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card.id} xs={12}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Grid container spacing={2}>
                    <Grid item>
                      <Avatar
                        alt={card.author}
                        src={card.authorAvatar}
                        className={classes.largeavatar}
                      />
                    </Grid>
                    <Grid item xs container direction="column" spacing={0}>
                      <Typography variant="h6">{card.author}</Typography>
                      <Typography gutterBottom variant="caption" display="block">
                        {getResultWord(card.countReview, ['отзыв', 'отзыва', 'отзывов'])}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1">{card.data}</Typography>
                    </Grid>
                  </Grid>
                  <Rating
                    name="half-rating-read"
                    defaultValue={card.stars}
                    precision={0.5}
                    readOnly
                  />
                  <Typography>{card.text}</Typography>
                </CardContent>

                <CardActions>
                  <IconButton aria-label="Лайкнуть">
                    <ThumbUpAlt />
                  </IconButton>
                  <IconButton aria-label="Добавить комментарий">
                    <CommentIcon />
                  </IconButton>
                  {card.photos && (
                    <AvatarGroup max={3}>
                      {card.photos.map((i) => (
                        <Avatar alt="" src={i} />
                      ))}
                    </AvatarGroup>
                  )}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Review;
