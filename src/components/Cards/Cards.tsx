'use client';
import React from 'react';

import { useStyles } from './Cards.styles';
import { Card, CardVariant } from '@/components/Cards/Card';
import Text from '@stryberventures/gaia-react.text';
import FWA from '@/assets/icons/fwa.svg';
import Awwwards from '@/assets/icons/awwwards.svg';
import Webby from '@/assets/icons/webby.svg';

export const Cards = () => {
  const classes = useStyles();
  return (
    <section className={classes.cardsContainer}>
      <Card variant={CardVariant.Black} className={classes.blackCard}>
        <Text variant='h4' weight='bold'>
          مستوفي التراخيص من
        </Text>
        <div className={classes.blackCardIconContainer}>
          <div className={classes.blackCardIconWrapper}>
            <FWA />
            <Text variant='caption2'>معلومات عن الرخصة</Text>
          </div>
          <div className={classes.blackCardIconWrapper}>
            <Awwwards />
            <Text variant='caption2'>معلومات عن الرخصة</Text>
          </div>
          <div className={classes.blackCardIconWrapper}>
            <Webby />
            <Text variant='caption2'>معلومات عن الرخصة</Text>
          </div>
        </div>
      </Card>
      <Card className={classes.primaryCard}>
        <Text variant='display2' align='center' weight='bold'>
          مجاني 100%
        </Text>
        <Text variant='body1' align='center'>
          خدماتنا مجانية بالكامل! يعني تأكد ان مافيه اي رسوم خفية. أرباحنا
          ناخذها من البنوك بعد الموافقة والاتفاق.
        </Text>
      </Card>
    </section>
  );
};
