'use client';
import React from 'react';

import { useStyles } from './DashboardCard.styles';
import classNames from 'classnames';
import { Timeline } from './Timeline/Timeline';

export enum DashboardCardVariant {
  Active = 'active',
  Inactive = 'inactive',
  Disabled = 'disabled',
}

type DashboardCardProps = {
  variant: DashboardCardVariant;
  isFirst?: boolean;
  isLast?: boolean;
  isCompleted?: boolean;
  children?: React.ReactNode;
  className?: string;
  processing?: boolean;
  managerCardTitle?: string;
  managerCardDescriptionParagaphs?: string[];
};

export const DashboardCard: React.FC<DashboardCardProps> = ({
  children,
  variant,
  isFirst,
  isLast,
  isCompleted,
  className,
  processing,
  managerCardTitle,
  managerCardDescriptionParagaphs,
}) => {
  const classes = useStyles({ isLast, isCompleted });
  return (
    <div className={classes.container}>
      <Timeline
        variant={processing ? DashboardCardVariant.Active : variant}
        isFirst={isFirst}
        isLast={isLast}
        managerCardTitle={managerCardTitle}
        managerCardDescriptionParagaphs={managerCardDescriptionParagaphs}
      />
      <div className={classNames(classes.card, classes[variant], className)}>
        {children}
      </div>
    </div>
  );
};
