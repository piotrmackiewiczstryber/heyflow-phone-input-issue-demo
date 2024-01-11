'use client';
import React from 'react';

import { useStyles } from './AboutUsHero.styles';
import Text from '@stryberventures/gaia-react.text';
import Image from 'next/image';
import heroImage from '@/assets/images/about-us-hero.jpg';

export const AboutUsHero: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.heroText}>
        <Text
          variant='h2'
          component='h1'
          weight='bold'
          className={classes.title}
        >
          من نحن؟
        </Text>
        <Text variant='body1' className={classes.description}>
          لكن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار النشوة
          وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف حقيقة وأساس تلك
          السعادة البشرية. فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن
          بفضل هؤلاء الأشخاص الذين لا يدركون بأن السعادة لا بد أن نستشعرها بصورة
          أكثر عقلانية ومنطقية فيعرضهم هذا لمواجهة الظروف الأليمة، وأكرر بأنه لا
          يوجد من يرغب في الحب ونيل المنال ويتلذذ بالآلام.
        </Text>
      </div>
      <div className={classes.image}>
        <Image
          objectPosition='center'
          objectFit='cover'
          fill
          sizes='100vw'
          src={heroImage}
          alt='تواصل مع مستشار التمويل'
        />
      </div>
    </div>
  );
};
