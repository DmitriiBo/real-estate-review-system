import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import ButtonBase from '@material-ui/core/ButtonBase';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CommentIcon from '@material-ui/icons/Comment';
import ThumbUpAlt from '@material-ui/icons/ThumbUpAlt';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import Rating from '@material-ui/lab/Rating';

import getResultWord from '../../utils/getResultWord';

import { cnReview } from './cn-review';
import useStyles from './use-styles';

export type ReviewCardProps = {
  id?: number;
  author?: string;
  authorAvatar?: string;
  countReview?: number;
  date?: string;
  rating?: number;
  title?: string;
  description?: string;
  property?: string;
  photos?: string[];
};

const Review: React.FunctionComponent<ReviewCardProps> = (props) => {
  const classes = useStyles();

  return (
    <div className={cnReview()}>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Grid className={classes.cardContent__grid} container spacing={2}>
            <Grid item>
              <Avatar className={classes.largeavatar} alt={props.author} src={props.authorAvatar} />
            </Grid>
            <Grid item xs container spacing={0} direction="column">
              <Typography variant="h6">{props.author}</Typography>
              <Typography gutterBottom variant="caption" display="block">
                {props.countReview &&
                  getResultWord(props.countReview, ['отзыв', 'отзыва', 'отзывов'])}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="caption">{props.date}</Typography>
            </Grid>
          </Grid>
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
          <ButtonBase className={classes.buttonBase}>
            {props.photos && (
              <AvatarGroup max={3}>
                {props.photos.map((i: string) => (
                  <Avatar alt="" src={i} key={i} />
                ))}
              </AvatarGroup>
            )}
          </ButtonBase>
        </CardActions>
      </Card>
    </div>
  );
};

export default Review;
