'use client';

import useStyles from './styles';

interface IPageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout: React.FC<IPageLayoutProps> = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.root}>{children}</div>;
};
