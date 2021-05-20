import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  buttonBase: {
    borderRadius: '30px',
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: theme.spacing(2),
  },
  cardContent: {
    flexGrow: 1,
    paddingBottom: theme.spacing(0),
  },
  largeavatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default useStyles;
