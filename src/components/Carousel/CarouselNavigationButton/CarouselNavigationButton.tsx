import Button from '@stryberventures/gaia-react.button';
import useStyles from './styles';

export const CarouselNavigationButton = ({
  icon,
  onClick,
  style,
}: {
  icon: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  style?: React.CSSProperties;
}) => {
  const classes = useStyles();
  return (
    <Button
      icon={icon}
      onClick={onClick}
      className={classes.root}
      style={style}
    />
  );
};
