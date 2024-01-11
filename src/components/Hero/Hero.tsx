'use client';
import React from 'react';
import Image from 'next/image';

import { useStyles } from './Hero.styles';
import Text from '@stryberventures/gaia-react.text';
import { CustomButton } from '@/components/CustomButton/CustomButton';
import Link from 'next/link';

export const Hero = () => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <div className={classes.headerContent}>
        <Text component='h1' weight='bold' className={classes.title}>
          نبحث لك عن أفضل عروض التمويل العقاري ونقدمها لك، اختصر الطريق وخلّك مع
          تمويلي
        </Text>
        <Text variant='body1'>
          امتلك بيت العمر بأقساط مريحة وفوائد منخفضة! خلال ساعات فقط تقدر تحصل
          على الموافقة المبدئية لقرضك العقاري بما يتناسب مع حاجتك ودخلك بكل
          خصوصية وبدون أي رسوم إضافية.
        </Text>
        <Text weight='bold' variant='h4'>
          سلّمنا المهمة وريّح بالك!
        </Text>
        <div className={classes.buttonsContainer}>
          <Link href='/apply'>
            <CustomButton contrast>قدّم الآن</CustomButton>
          </Link>
          <CustomButton mode='dark' variant='outlined' contrast>
            تواصل مع مستشار التمويل
          </CustomButton>
        </div>
      </div>
      <div className={classes.image}>
        <Image
          objectPosition='center'
          objectFit='cover'
          fill
          sizes='100vw'
          src='/header.png'
          alt='تواصل مع مستشار التمويل'
        />
      </div>
    </header>
  );
};
