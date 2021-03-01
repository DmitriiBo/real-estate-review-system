import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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
  cardContent__grid: {
    paddingBottom: theme.spacing(1),
  },
  largeavatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default useStyles;
