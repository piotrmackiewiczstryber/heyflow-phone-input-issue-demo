'use client';
import React from 'react';
import Text from '@stryberventures/gaia-react.text';

import { useStyles } from './AppointmentCard.styles';
import Image from 'next/image';
import contactImage from '@/assets/images/contact.png';

export const AppointmentCard = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.profile}>
        <Image
          src={contactImage}
          alt='Contact manager'
          priority
          width={88}
          height={88}
        />
        <div className={classes.profileText}>
          <Text variant='body1' weight='bold'>
            خالد عبد المجيد
          </Text>
          <Text variant='body3'>مستشار تمويل عقاري</Text>
        </div>
      </div>
      <div className={classes.content}>
        <Text variant='body1' weight='bold'>
          موعدنا سوا في بنك الرياض في 24 جماد الأول, نراك انشاء الله
        </Text>
        <Text variant='body2'>
          وصلت لنهاية الرحلة وبداية تحقيق الحلم، ولأنك عميل تمويلي المميز، حجزنا
          لك سيارة خاصة تاخذك للبنك في يوم التوقيع. اذا اردت تعديل موعد التوقيع
          تواصل معاي على الواتسب.
        </Text>
      </div>
    </div>
  );
};
