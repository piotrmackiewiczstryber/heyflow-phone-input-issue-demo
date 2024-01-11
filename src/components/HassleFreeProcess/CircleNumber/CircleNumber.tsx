'use client';
import useStyles from './styles';

interface CircleNumberProps {
  digit: number;
}

export const CircleNumber = ({ digit }: CircleNumberProps) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.innerContainer}>{digit}</div>
    </div>
  );
};
