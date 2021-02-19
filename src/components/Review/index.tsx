import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CommentIcon from '@material-ui/icons/Comment';
import ThumbUpAlt from '@material-ui/icons/ThumbUpAlt';
import Rating from '@material-ui/lab/Rating';

import { cnReview } from './cn-review';

type ReviewProps = {
  title: string;
};

const Review: React.FC<ReviewProps> = ({ title }) => {
  const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
  }));

  const cards = [1, 2, 3];
  const classes = useStyles();

  return (
    <div className={cnReview()}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Typography gutterBottom variant="h5" component="h2">
        Отзывы [3] ул.Стахановская, 54 лит 3
      </Typography>

      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Avatar alt="Alex Yurkov" src="https://source.unsplash.com/random" />
                  <Typography gutterBottom variant="h6" component="h2">
                    Alex Yurkov
                  </Typography>
                  <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                  <Typography>
                    Отличная площадка для проведения мастер-классов. Арендовал 250м2 с марта 2020 по
                    декабрь. Современные планировки, надежные инженерные системы, профессиональная
                    управляющая компания. Всё устроило.
                  </Typography>
                </CardContent>
                <CardActions>
                  <IconButton aria-label="like">
                    <ThumbUpAlt />
                  </IconButton>
                  <IconButton aria-label="comment">
                    <CommentIcon />
                  </IconButton>
                  <Button variant="outlined" size="small" color="primary">
                    Сохранить
                  </Button>
                  <Button variant="outlined" size="small" color="primary">
                    Посмотреть прикрепленные фото
                  </Button>
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
