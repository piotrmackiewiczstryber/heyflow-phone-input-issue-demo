'use client';
import React from 'react';

import { useStyles } from './Faq.styles';
import Text from '@stryberventures/gaia-react.text';
import { DesktopFaqItem } from './DesktopFaqItem';
import { MobileFaqItem } from '@/components/Faq/MobileFaqItem';

export type FaqItemAnswerType = {
  badge: string;
  text: string;
};

export type FaqItemType = {
  question: string;
  answers: FaqItemAnswerType[];
};

const FAQ_ITEMS: FaqItemType[] = [
  {
    question: 'عدد الزيارات المتوقعة للبنوك',
    answers: [
      {
        badge: 'مع تمويلي',
        text: 'مع مايو يعبأ ارتكبها بحق, لإعلان والكوري التنازلي من جهة. مما أم أمدها قبضته',
      },
      {
        badge: 'مع تمويلي',
        text: 'مع مايو يعبأ ارتكبها بحق, لإعلان والكوري التنازلي من جهة. مما أم أمدها قبضته',
      },
    ],
  },
  {
    question: 'عدد الزيارات المتوقعة للبنوك',
    answers: [
      {
        badge: 'مع تمويلي',
        text: 'مع مايو يعبأ ارتكبها بحق, لإعلان والكوري التنازلي من جهة. مما أم أمدها قبضته',
      },
      {
        badge: 'مع تمويلي',
        text: 'مع مايو يعبأ ارتكبها بحق, لإعلان والكوري التنازلي من جهة. مما أم أمدها قبضته',
      },
    ],
  },
  {
    question: 'عدد الزيارات المتوقعة للبنوك',
    answers: [
      {
        badge: 'مع تمويلي',
        text: 'مع مايو يعبأ ارتكبها بحق, لإعلان والكوري التنازلي من جهة. مما أم أمدها قبضته',
      },
      {
        badge: 'مع تمويلي',
        text: 'مع مايو يعبأ ارتكبها بحق, لإعلان والكوري التنازلي من جهة. مما أم أمدها قبضته',
      },
    ],
  },
  {
    question: 'عدد الزيارات المتوقعة للبنوك',
    answers: [
      {
        badge: 'مع تمويلي',
        text: 'مع مايو يعبأ ارتكبها بحق, لإعلان والكوري التنازلي من جهة. مما أم أمدها قبضته',
      },
      {
        badge: 'مع تمويلي',
        text: 'مع مايو يعبأ ارتكبها بحق, لإعلان والكوري التنازلي من جهة. مما أم أمدها قبضته',
      },
    ],
  },
];

export const Faq = () => {
  const classes = useStyles();
  return (
    <section>
      <Text weight='bold' component='h3' className={classes.title}>
        كيف يمكن لتمويلي المساعدة
      </Text>
      <div className={classes.desktopFaq}>
        {FAQ_ITEMS.map((item, index) => (
          <DesktopFaqItem key={index} {...item} />
        ))}
      </div>
      <div className={classes.mobileFaq}>
        {FAQ_ITEMS.map((item, index) => (
          <MobileFaqItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
};
