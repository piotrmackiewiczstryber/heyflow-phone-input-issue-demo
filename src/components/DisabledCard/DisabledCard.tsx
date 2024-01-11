import React from 'react';
import Text from '@stryberventures/gaia-react.text';

import { useStyles } from './DisabledCard.styles';
import {
  DashboardCard,
  DashboardCardVariant,
} from '@/components/DashboardCard/DashboardCard';

type DisabledCardProps = {
  title: string;
  subtitle: string;
  isLast?: boolean;
  isCompleted?: boolean;
};

export const DisabledCard: React.FC<DisabledCardProps> = ({
  title,
  subtitle,
  isLast,
  isCompleted,
}) => {
  const classes = useStyles();
  return (
    <DashboardCard
      variant={DashboardCardVariant.Disabled}
      isLast={isLast}
      isCompleted={isCompleted}
    >
      <div className={classes.textWrapper}>
        <Text variant='body1' weight='bold'>
          {title}
        </Text>
        <Text variant='body3'>{subtitle}</Text>
      </div>
    </DashboardCard>
  );
};
