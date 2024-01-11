'use client';
import React from 'react';
import Text from '@stryberventures/gaia-react.text';

import { useStyles } from './OfferSelection.styles';
import Form from '@stryberventures/gaia-react.form';
import { CustomButton } from '@/components/CustomButton/CustomButton';
import RadioButton from '@stryberventures/gaia-react.radio-button';
import {
  DashboardCard,
  DashboardCardVariant,
} from '@/components/DashboardCard/DashboardCard';

const variants = [
  {
    title: 'العرض الأول',
    bank: 'البنك  العربي',
  },
  {
    title: 'العرض الثاني',
    bank: 'البنك السعودي الأول',
  },
  {
    title: 'العرض الثالث',
    bank: 'البنك السعودي الفرنسي',
  },
];

type OfferSelectionPropsType = {
  isCompleted?: boolean;
};

export const OfferSelection = ({ isCompleted }: OfferSelectionPropsType) => {
  const classes = useStyles();
  return (
    <DashboardCard
      isCompleted={isCompleted}
      variant={DashboardCardVariant.Active}
      managerCardTitle='اختيار  العرض  الأنسب'
      managerCardDescriptionParagaphs={[
        'مستشارك  الخاص  شارك  معك  عبر  البريد  الالكتروني  أفضل  ٣  عروض  تناسب  حالتك  وتتماشى  مع  متطلباتك،  قارن بينها  واختر  منها  بعد  ما  تتوكل  على  الله.',
        'لو  احترت  أو  ترددت  لا  تشيل  هم  وتواصل  مع  مستشارك  عن  طريق  الواتس  أب.',
      ]}
    >
      <div className={classes.titleWrapper}>
        <Text variant='body1' weight='bold' className={classes.title}>
          اختيار العرض الأنسب
        </Text>
        <Text variant='body3' className={classes.subtitle}>
          كل اللي عليك بهالخطوة تختار أفضل عرض وصلك، ولا تنسى تستخير!
        </Text>
      </div>
      <Form className={classes.form}>
        <div className={classes.variantsWrapper}>
          {variants.map((variant, index) => (
            <div className={classes.variant} key={index}>
              <Text className={classes.variantTitle}>{variant.title}</Text>
              <RadioButton
                alignControl='middle'
                name='offer'
                label={variant.bank}
                value={String(index)}
              />
            </div>
          ))}
        </div>
        <CustomButton type='submit' fullWidth>
          تأكيد
        </CustomButton>
      </Form>
    </DashboardCard>
  );
};
