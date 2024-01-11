import React from 'react';
import LinkedInIcon from '@/assets/icons/linkedin.svg';

import { useStyles } from './Contact.styles';
import Text from '@stryberventures/gaia-react.text';

type ContactProps = {
  name: string;
  position: string;
};

export const Contact: React.FC<ContactProps> = ({ name, position }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.photoPlaceholder} />
      <div className={classes.content}>
        <div className={classes.textWrapper}>
          <Text variant='body1' weight='bold' className={classes.name}>
            {name}
          </Text>
          <Text variant='components2' className={classes.position}>
            {position}
          </Text>
        </div>
        <LinkedInIcon className={classes.icon} />
      </div>
    </div>
  );
};
