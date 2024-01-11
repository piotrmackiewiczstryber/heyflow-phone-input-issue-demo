'use client';
import React from 'react';

import { useStyles } from './AboutUsCard.styles';
import { Card, CardVariant } from '@/components/Cards/Card';
import Text from '@stryberventures/gaia-react.text';
import FWA from '@/assets/icons/fwa.svg';
import Awwwards from '@/assets/icons/awwwards.svg';
import Webby from '@/assets/icons/webby.svg';

export const AboutUsCard: React.FC = () => {
  const classes = useStyles();
  return (
    <Card variant={CardVariant.Black} className={classes.fullWidth}>
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
  );
};
