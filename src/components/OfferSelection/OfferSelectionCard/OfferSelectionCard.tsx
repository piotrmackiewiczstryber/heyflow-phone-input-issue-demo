import React from 'react';
import { DashboardCardVariant } from '@/components/DashboardCard/DashboardCard';
import { OfferSelection } from '@/components/OfferSelection/OfferSelection';
import { DisabledCard } from '@/components/DisabledCard/DisabledCard';
import { InactiveCard } from '@/components/InactiveCard/InactiveCard';
import { CustomButton } from '@/components/CustomButton/CustomButton';
import EditIcon from '@/components/Icons/edit.svg';
import useStyles from './OfferSelectionCard.styles';

type OfferSelectionCardProps = {
  variant: DashboardCardVariant;
  isCompleted?: boolean;
};

export const OfferSelectionCard: React.FC<OfferSelectionCardProps> = ({
  variant,
  isCompleted,
}) => {
  const classes = useStyles();

  switch (variant) {
    case DashboardCardVariant.Active:
      return <OfferSelection isCompleted={isCompleted} />;
    case DashboardCardVariant.Inactive:
      return (
        <InactiveCard
          title='اختيار  العرض  الأنسب'
          isCompleted={isCompleted}
          button={
            <CustomButton
              iconLeft={<EditIcon />}
              variant='outlined'
              className={classes.button}
            >
              تحديث
            </CustomButton>
          }
        />
      );
    case DashboardCardVariant.Disabled:
      return (
        <DisabledCard
          isCompleted={isCompleted}
          title='اختيار  العرض  الأنسب'
          subtitle=' كل  اللي  عليك  بهالخطوة  تختار  أفضل  عرض  وصلك،  ولا  تنسى  تستخير!'
        />
      );
  }
};
