'use client';
import React from 'react';

import { useStyles } from './ManagerCard.styles';
import Image from 'next/image';
import contactImage from '@/assets/images/contact.png';
import Text from '@stryberventures/gaia-react.text';

type ManagerCardProps = {
  title: string;
  descriptionParagaphs: string[];
};

export const ManagerCard: React.FC<ManagerCardProps> = ({
  title,
  descriptionParagaphs,
}) => {
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
          {title}
        </Text>
        {descriptionParagaphs.map((paragraph, idx) => (
          <Text key={idx} variant='body2'>
            {paragraph}
          </Text>
        ))}
      </div>
    </div>
  );
};
