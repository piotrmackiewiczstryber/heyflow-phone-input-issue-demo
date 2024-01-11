import { createStyles } from '@stryberventures/gaia-react.theme';

export default createStyles<string, { isCompleted?: boolean }>(() => ({
  container: {
    paddingBottom: '50px',
    paddingRight: (props) => (props.isCompleted ? '15%' : 0),
    paddingLeft: (props) => (props.isCompleted ? '15%' : 0),
  },
  appointmentCardContainer: {
    paddingRight: (props) => (props.isCompleted ? '15%' : 0),
    paddingLeft: (props) => (props.isCompleted ? '15%' : 0),
  },
  title: {
    fontSize: '28px',
    fontWeight: 700,
    lineHeight: '34px',
    width: '100%',
    textAlign: 'center',
    marginBottom: '89px',
  },
  button: {
    borderColor: '#d0d5dd !important',
  },
}));
