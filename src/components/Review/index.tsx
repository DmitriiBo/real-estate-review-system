import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import BookmarkBorderSharpIcon from '@material-ui/icons/BookmarkBorderSharp';
import CommentIcon from '@material-ui/icons/Comment';
import ThumbUpAlt from '@material-ui/icons/ThumbUpAlt';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import Rating from '@material-ui/lab/Rating';

import { initialData as cards } from '../../mocks/review-mock-data';

import { cnReview } from './cn-review';

type ReviewProps = {
  title: string;
};

const Review: React.FC<ReviewProps> = ({ title }) => {
  const useStyles = makeStyles((theme) => ({
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
      backgroundColor: '#f9fcff',
      height: '100%',
      maxWidth: 'lg',
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardContent: {
      flexGrow: 1,
      paddingBottom: theme.spacing(0),
    },
    date: {
      alignSelf: 'right',
    },
    largeavatar: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
    header: {
      justifyContent: 'space-between',
      paddingBottom: theme.spacing(4),
    },
    header__text: {
      paddingTop: theme.spacing(1),
      maxWidth: '90%',
      wordWrap: 'break-word',
    },
  }));

  const classes = useStyles();
  interface StringArray {
    [index: number]: string;
  }
  function numWord(value: number, words: StringArray) {
    // eslint-disable-next-line no-param-reassign
    value = Math.abs(value) % 100;
    const num = value % 10;
    if (value > 10 && value < 20) return words[2];
    if (num > 1 && num < 5) return words[1];
    if (num === 1) return words[0];
    return words[2];
  }

  return (
    <div className={cnReview()}>
      <Container className={classes.cardGrid}>
        <Grid container className={classes.header}>
          <Grid spacing={4} className={classes.header__text}>
            {cards.length ? (
              <Typography variant="h5">
                {cards.length} {numWord(cards.length, ['результат', 'результата', 'результатов'])}{' '}
                найдено по запросу &quot;{title}&quot;
              </Typography>
            ) : (
              <Typography variant="h5">Не найдено</Typography>
            )}
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
                      <Avatar alt={card.author} src={card.photo} className={classes.largeavatar} />
                    </Grid>
                    <Grid item xs container direction="column" spacing={0}>
                      <Typography variant="h6">{card.author}</Typography>
                      <Typography gutterBottom variant="caption" display="block">
                        {card.count} {numWord(card.count, ['отзыв', 'отзыва', 'отзывов'])}
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
