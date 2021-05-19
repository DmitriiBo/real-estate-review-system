import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CommentIcon from '@material-ui/icons/Comment';
import ThumbUpAlt from '@material-ui/icons/ThumbUpAlt';
import Rating from '@material-ui/lab/Rating';

import { reviewData } from '../../types';

import { cnReview } from './cn-review';
import useStyles from './use-styles';

const Review: React.FunctionComponent<reviewData> = (props) => {
  const classes = useStyles();

  return (
    <div className={cnReview()}>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Typography variant="h6">{props.reviewer}</Typography>
          <Typography variant="h6">{props.title}</Typography>
          <Typography variant="h6">{props.review_on}</Typography>
          <Rating name="half-rating-read" defaultValue={props.rating} precision={0.5} readOnly />
          <Typography>{props.description}</Typography>
        </CardContent>

        <CardActions>
          <IconButton aria-label="Оценить этот отзыв как полезный">
            <ThumbUpAlt />
          </IconButton>
          <IconButton aria-label="Добавить комментарий к отзыву">
            <CommentIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default Review;
