'use client';
import React from 'react';

import { useStyles } from './AboutUsContacts.styles';
import Text from '@stryberventures/gaia-react.text';
import { Contact } from '@/components/AboutUsContacts/Contact/Contact';

const CONTACTS = new Array(6).fill({
  name: 'فهد عبد الله',
  position: 'مدير مستشاري التمويل العقاري',
});

export const AboutUsContacts = () => {
  const classes = useStyles();
  return (
    <div>
      <Text variant='h2' component='h3' weight='bold' className={classes.title}>
        فريق عمل تمويلي
      </Text>
      <div className={classes.contactsWrapper}>
        {CONTACTS.map((contact, index) => (
          <Contact key={index} {...contact} />
        ))}
      </div>
    </div>
  );
};
