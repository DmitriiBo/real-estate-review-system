import { makeStyles } from '@material-ui/core/styles';

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

export default useStyles;
