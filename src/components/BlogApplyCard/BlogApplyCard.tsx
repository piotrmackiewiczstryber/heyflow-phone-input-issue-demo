'use client';
import { CustomButton } from '@/components/CustomButton/CustomButton';
import useStyles from './BlogApplyCard.styles';
import Text from '@stryberventures/gaia-react.text';

export const BlogApplyCard = () => {
  const classes = useStyles();

  return (
    <div className={classes.card}>
      <div className={classes.cardRight} />
      <div className={classes.cardLeft}>
        <Text className={classes.cardLeftText}>
          ابدأ رحلتك للتمويل العقاري مع تمويلي واحصل على بيت العمر
        </Text>
        <CustomButton variant='outlined' contrast>
          قدّم الآن
        </CustomButton>
      </div>
    </div>
  );
};
