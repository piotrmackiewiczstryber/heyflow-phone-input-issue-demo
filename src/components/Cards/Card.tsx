import React from 'react';

import { useStyles } from './Cards.styles';
import classNames from 'classnames';

export enum CardVariant {
  Primary = 'primary',
  Black = 'black',
}

type CardProps = {
  variant?: CardVariant;
  children?: React.ReactNode;
  className?: string;
};

export const Card: React.FC<CardProps> = ({
  variant = CardVariant.Primary,
  children,
  className,
}) => {
  const classes = useStyles();
  return (
    <div className={classNames(classes.card, classes[variant], className)}>
      {children}
    </div>
  );
};
