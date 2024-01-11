'use client';
import Text from '@stryberventures/gaia-react.text';
import { CustomButton } from '../CustomButton/CustomButton';
import useStyles from './ApplyCard.styles';

interface ApplyCardProps {
  title: string;
  subtitle?: string;
  buttonText: string;
}

export const ApplyCard = ({ title, subtitle, buttonText }: ApplyCardProps) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.textContainer}>
        <Text variant='h4' weight='bold'>
          {title}
        </Text>
        {subtitle ? <Text variant='body2'>{subtitle}</Text> : null}
      </div>
      <CustomButton variant='outlined' contrast className={classes.button}>
        {buttonText}
      </CustomButton>
    </div>
  );
};
