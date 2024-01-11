'use client';
import React from 'react';
import Image from 'next/image';
import faqContactImage from '@/assets/images/contact.png';
import Text from '@stryberventures/gaia-react.text';

import { useStyles } from './FaqContact.styles';
import { CustomButton } from '@/components/CustomButton/CustomButton';

export const FaqContact = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.faqProfile}>
        <Image
          src={faqContactImage}
          alt='Contact manager'
          priority
          width={88}
          height={88}
        />
        <div className={classes.faqProfileText}>
          <Text variant='body1' weight='bold'>
            خالد عبد المجيد
          </Text>
          <Text variant='body3'>مستشار تمويل عقاري</Text>
        </div>
      </div>
      <Text variant='body2' className={classes.contactDescription}>
        قد يكون لديك بعض الأسئلة بالنسبة لنا. نأمل أن نتمكن من الإجابة عليها
        هنا. إذا لم يكن الأمر كذلك، يرجى التواصل مع مستشار التمويل العقاري
        للإجابة على الأسئلة
      </Text>
      <CustomButton className={classes.button}>تواصل الآن</CustomButton>
    </div>
  );
};
