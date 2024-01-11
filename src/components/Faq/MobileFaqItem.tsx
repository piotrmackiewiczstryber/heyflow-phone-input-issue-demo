import React from 'react';

import { useStyles } from './Faq.styles';
import { FaqItemType } from '@/components/Faq/Faq';
import Text from '@stryberventures/gaia-react.text';
import classNames from 'classnames';
import { Accordion } from '@/components/Accordion/Accordion';

export const MobileFaqItem: React.FC<FaqItemType> = ({ question, answers }) => {
  const classes = useStyles();

  return (
    <Accordion title={question}>
      {answers.map((answer, index) => (
        <div key={index} className={classes.answer}>
          <Text
            weight='bold'
            className={classNames(classes.textBadge, {
              [classes.primary]: index === 0,
              [classes.error]: index === 1,
            })}
          >
            {answer.badge}
          </Text>
          <Text variant='body2' className={classes.answerText}>
            {answer.text}
          </Text>
        </div>
      ))}
    </Accordion>
  );
};
