import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    // root: {
    //   width: '100%',
    // },
    clientStepperContainer: {
      width: '80%',
    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    actionsContainer: {
      marginBottom: theme.spacing(2),
    },
    img: {
      borderRadius: '80%',
    },
    resetContainer: {
      padding: theme.spacing(3),
    },
  }),
);
