'use client';
import Text from '@stryberventures/gaia-react.text';
import useStyles from './Badges.styles';

interface BadgesProps {
  badges: string[];
}

export const Badges = ({ badges }: BadgesProps) => {
  const classes = useStyles();
  return (
    <div className={classes.badgesContainer}>
      {badges.map((tag, idx) => (
        <Text key={idx} className={classes.badge}>
          {tag}
        </Text>
      ))}
    </div>
  );
};
