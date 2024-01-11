import React from 'react';

import HamburgerIcon from '@/components/Icons/hamburger.svg';
import CloseIcon from '@/components/Icons/close.svg';
import { useStyles } from './TopBar.styles';

type ToggleButtonProps = {
  isOpen: boolean;
  onClick: () => void;
};

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  isOpen,
  onClick,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.toggleButton} onClick={onClick}>
      {!isOpen ? <HamburgerIcon /> : <CloseIcon />}
    </div>
  );
};
