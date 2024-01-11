'use client';
import useStyles from './Timeline.styles';
import CogIcon from '@/assets/icons/blue-circle-white-cog.svg';
import CheckmarkIcon from '@/assets/icons/blue-circle-white-checkmark.svg';
import classNames from 'classnames';
import { ManagerCard } from '@/components/ManagerCard/ManagerCard';

interface TimelineProps {
  variant: 'active' | 'inactive' | 'disabled';
  isFirst?: boolean;
  isLast?: boolean;
  managerCardTitle?: string;
  managerCardDescriptionParagaphs?: string[];
}

export const Timeline = ({
  variant,
  isFirst,
  isLast,
  managerCardTitle = '',
  managerCardDescriptionParagaphs = [],
}: TimelineProps) => {
  const classes = useStyles({ variant, isFirst, isLast });

  const Icons = {
    active: CogIcon,
    inactive: CheckmarkIcon,
    disabled: null,
  };

  const IconComponent = Icons[variant];

  return (
    <div className={classes.container}>
      <div className={classNames(classes.line, classes.topLine)} />
      <div className={classes.iconContainer}>
        {variant === 'disabled' ? (
          <div className={classNames(classes.icon, classes.disabledIcon)} />
        ) : (
          <IconComponent className={classes.icon} />
        )}
        {variant === 'active' ? (
          <div className={classes.managerCardContainer}>
            <ManagerCard
              title={managerCardTitle}
              descriptionParagaphs={managerCardDescriptionParagaphs}
            />
          </div>
        ) : null}
      </div>
      <div className={classNames(classes.line, classes.bottomLine)} />
    </div>
  );
};
