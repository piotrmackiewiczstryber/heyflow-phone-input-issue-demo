'use client';
import React from 'react';

import { useStyles } from './NotFound.styles';
import Text from '@stryberventures/gaia-react.text';
import { CustomButton } from '@/components/CustomButton/CustomButton';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import notFoundImage from '@/assets/images/404.png';

export const NotFound = () => {
  const router = useRouter();
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Image
        alt='404'
        src={notFoundImage}
        width={500}
        height={230}
        className={classes.image}
      />
      <div className={classes.textWrapper}>
        <Text variant='display2' weight='bold' align='center'>
          عذراً
        </Text>
        <Text className={classes.supportText} variant='body1'>
          هذه الصفحة غير متوفرة حاليا{' '}
        </Text>
      </div>
      <CustomButton onClick={() => router.push('/')} shape='circle'>
        العودة الى الصفحة الرئيسية
      </CustomButton>
    </div>
  );
};
