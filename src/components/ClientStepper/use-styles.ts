import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: '1020px',
    },
    img: {
      width: '100%',
      // height: 'auto',
    },
    imgWithStars: {
      width: '100%',
      height: '80%',
      objectFit: 'none',
      objectPosition: '60% 80%',
    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    actionsContainer: {
      marginBottom: theme.spacing(2),
    },
    resetContainer: {
      padding: theme.spacing(3),
    },
  }),
);
