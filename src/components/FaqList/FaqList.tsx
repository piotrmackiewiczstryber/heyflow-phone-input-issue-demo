'use client';
import React from 'react';

import { useStyles } from './FaqList.styles';
import Text from '@stryberventures/gaia-react.text';
import { Accordion } from '@/components/Accordion/Accordion';

type FaqItem = {
  question: string;
  answer: string;
};

const FAQ_ITEMS: FaqItem[] = new Array(10).fill({
  question: 'المدة المتوقعة للحصول على التمويل',
  answer:
    'لكن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف حقيقة وأساس تلك السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن بفضل هؤلاء الأشخاص الذين لا يدركون بأن السعادة لا بد أن نستشعرها بصورة أكثر عقلانية ومنطقية فيعرضهم هذا لمواجهة الظروف الأليمة، وأكرر بأنه لا يوجد من يرغب في الحب ونيل المنال ويتلذذ بالآلام، الألم هو الألم ولكن نتيجة لظروف ما قد تكمن السعاده فيما نتحمله من كد وأسي.',
});

export const FaqList: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
      <Text weight='bold' variant='h2' className={classes.title}>
        اسئلة شائعة
      </Text>
      <div className={classes.faqListWrapper}>
        {FAQ_ITEMS.map((item, index) => (
          <Accordion title={item.question} key={index}>
            <Text className={classes.answer} variant='body1'>
              {item.answer}
            </Text>
          </Accordion>
        ))}
      </div>
    </div>
  );
};
