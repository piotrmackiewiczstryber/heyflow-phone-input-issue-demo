'use client';
import React from 'react';

import FacebookIcon from '@/assets/icons/facebook.svg';
import LinkedInIcon from '@/assets/icons/linkedin.svg';
import LogoIcon from '@/components/Icons/logo.svg';
import { useStyles } from './Footer.styles';
import Text from '@stryberventures/gaia-react.text';

export const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <LogoIcon />
      <div className={classes.footerContent}>
        <Text variant='body2' className={classes.footerText}>
          جميع الحقوق محفوظة © 2023
        </Text>
        <FacebookIcon />
        <LinkedInIcon />
      </div>
    </footer>
  );
};
