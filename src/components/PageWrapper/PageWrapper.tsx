'use client';
import React from 'react';

import { useStyles } from './PageWrapper.styles';

type PageWrapperProps = {
  children?: React.ReactNode;
};

export const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.container}>{children}</div>;
};
