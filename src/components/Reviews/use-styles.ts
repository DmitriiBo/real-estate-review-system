import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    backgroundColor: '#f5f5f5',
    height: '100%',
  },
  header: {
    justifyContent: 'space-between',
    paddingBottom: theme.spacing(4),
  },
}));

export default useStyles;
