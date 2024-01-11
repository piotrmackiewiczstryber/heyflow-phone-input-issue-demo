import React from 'react';

import { useStyles } from './Accordion.styles';
import Text from '@stryberventures/gaia-react.text';
import MinusIcon from '@/components/Icons/minus.svg';
import PlusIcon from '@/components/Icons/plus.svg';
import classNames from 'classnames';

type AccordionProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

export const Accordion: React.FC<AccordionProps> = ({
  children,
  title,
  className,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const classes = useStyles();

  const toggleOpen = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <div
      className={classNames(
        classes.accordionContainer,
        { [classes.openContainer]: isOpen },
        className
      )}
      onClick={toggleOpen}
    >
      <div className={classes.titleWrapper}>
        <Text weight='bold' variant='body1'>
          {title}
        </Text>
        {isOpen ? <MinusIcon /> : <PlusIcon />}
      </div>
      <div
        className={classNames(classes.contentWrapper, {
          [classes.open]: isOpen,
        })}
      >
        {children}
      </div>
    </div>
  );
};
