import React from 'react';

import { useStyles } from './InactiveCard.styles';
import {
  DashboardCard,
  DashboardCardVariant,
} from '@/components/DashboardCard/DashboardCard';
import Text from '@stryberventures/gaia-react.text';
import classNames from 'classnames';

type InactiveCardProps = {
  title: string;
  button?: React.ReactNode;
  isFirst?: boolean;
  isLast?: boolean;
  isCompleted?: boolean;
  processing?: boolean;
  managerCardTitle?: string;
  managerCardDescriptionParagaphs?: string[];
};

export const InactiveCard: React.FC<InactiveCardProps> = ({
  title,
  button,
  isFirst,
  isLast,
  isCompleted,
  processing,
  managerCardTitle,
  managerCardDescriptionParagaphs,
}) => {
  const classes = useStyles({ isCompleted });
  return (
    <div className={classes.container}>
      <DashboardCard
        className={classNames({ [classes.withButton]: !!button })}
        variant={DashboardCardVariant.Inactive}
        isFirst={isFirst}
        isLast={isLast}
        isCompleted={isCompleted}
        processing={processing}
        managerCardTitle={managerCardTitle}
        managerCardDescriptionParagaphs={managerCardDescriptionParagaphs}
      >
        <div className={classes.inactiveContentWrapper}>
          <Text variant='body1' weight='bold'>
            {title}
          </Text>
          {button}
        </div>
      </DashboardCard>
    </div>
  );
};
