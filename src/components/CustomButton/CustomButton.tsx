'use client';
import React from 'react';

import { useStyles } from './CustomButton.styles';
import Button, { IButton } from '@stryberventures/gaia-react.button';
import classNames from 'classnames';

type CustomButtonProps = IButton & {
  contrast?: boolean;
  mode?: 'dark' | 'light';
  active?: boolean;
};

export const CustomButton: React.FC<CustomButtonProps> = ({
  shape = 'round',
  variant = 'contained',
  contrast = false,
  className,
  size,
  mode = 'light',
  active = false,
  ...rest
}) => {
  const classes = useStyles();
  return (
    <Button
      size={size}
      shape={shape}
      variant={variant}
      className={classNames(
        classes.button,
        {
          [classes.small]: size === 'small',
          [classes.round]: shape === 'round',
          [classes.ghost]: variant === 'ghost',
          [classes.contained]: variant === 'contained' && !contrast,
          [classes.contrastContained]: contrast && variant === 'contained',
          [classes.contrastOutlined]: contrast && variant === 'outlined',
          [classes.dark]: mode === 'dark',
          [classes.active]: active,
        },
        className
      )}
      {...rest}
    />
  );
};
