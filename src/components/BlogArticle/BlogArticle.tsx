'use client';

import Image, { StaticImageData } from 'next/image';
import useStyles from './BlogArticle.styles';
import Text from '@stryberventures/gaia-react.text';
import { Badges } from '../Badges/Badges';

interface BlogArticleProps {
  title: string;
  date: string;
  tags: string[];
  image: StaticImageData;
}

export const BlogArticle = ({ title, date, tags, image }: BlogArticleProps) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.titleSection}>
        <Text className={classes.date}>{date}</Text>
        <Text className={classes.title}>{title}</Text>
        <Badges badges={tags} />
      </div>
      <div className={classes.image}>
        <Image
          src={image}
          alt={title}
          objectPosition='center'
          objectFit='cover'
          fill
          sizes='100vw'
        />
      </div>
      <div className={classes.contentSection}>
        <Text className={classes.paragraphTitle}>
          مع مايو يعبأ ارتكبها بحق, لإعلان والكوري التنازلي من جهة
        </Text>
        <Text className={classes.paragraphContent}>
          لكن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار النشوة
          وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف حقيقة وأساس تلك
          السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن
          بفضل هؤلاء الأشخاص الذين لا يدركون بأن السعادة لا بد أن نستشعرها بصورة
          أكثر عقلانية ومنطقية فيعرضهم هذا لمواجهة الظروف الأليمة، وأكرر بأنه لا
          يوجد من يرغب في الحب ونيل المنال ويتلذذ بالآلام، الألم هو الألم ولكن
          نتيجة لظروف ما قد تكمن السعاده فيما نتحمله من كد وأسي.
        </Text>
        <Text className={classes.paragraphContent}>
          و سأعرض مثال حي لهذا، من منا لم يتحمل جهد بدني شاق إلا من أجل الحصول
          على ميزة أو فائدة؟ ولكن من لديه الحق أن ينتقد شخص ما أراد أن يشعر
          بالسعادة التي لا تشوبها عواقب أليمة أو آخر أراد أن يتجنب الألم الذي
          ربما تنجم عنه بعض المتعة ؟
        </Text>
        <Text className={classes.paragraphContent}>
          علي الجانب الآخر نشجب ونستنكر هؤلاء الرجال المفتونون بنشوة اللحظة
          الهائمون في رغباتهم فلا يدركون ما يعقبها من الألم والأسي المحتم،
          واللوم كذلك يشمل هؤلاء الذين أخفقوا في واجباتهم نتيجة لضعف إرادتهم
          فيتساوي مع هؤلاء الذين يتجنبون وينأون عن تحمل الكدح والألم .
        </Text>
        <Text className={classes.paragraphTitle}>
          مع مايو يعبأ ارتكبها بحق, لإعلان والكوري التنازلي من جهة
        </Text>
        <Text className={classes.paragraphContent}>
          لكن لا بد أن أوضح لك أن كل هذه الأفكار المغلوطة حول استنكار النشوة
          وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل لتكتشف حقيقة وأساس تلك
          السعادة البشرية، فلا أحد يرفض أو يكره أو يتجنب الشعور بالسعادة، ولكن
          بفضل هؤلاء الأشخاص الذين لا يدركون بأن السعادة لا بد أن نستشعرها بصورة
          أكثر عقلانية ومنطقية فيعرضهم هذا لمواجهة الظروف الأليمة، وأكرر بأنه لا
          يوجد من يرغب في الحب ونيل المنال ويتلذذ بالآلام، الألم هو الألم ولكن
          نتيجة لظروف ما قد تكمن السعاده فيما نتحمله من كد وأسي.
        </Text>
        <Text className={classes.paragraphContent}>
          و سأعرض مثال حي لهذا، من منا لم يتحمل جهد بدني شاق إلا من أجل الحصول
          على ميزة أو فائدة؟ ولكن من لديه الحق أن ينتقد شخص ما أراد أن يشعر
          بالسعادة التي لا تشوبها عواقب أليمة أو آخر أراد أن يتجنب الألم الذي
          ربما تنجم عنه بعض المتعة ؟
        </Text>
        <Text className={classes.paragraphContent}>
          علي الجانب الآخر نشجب ونستنكر هؤلاء الرجال المفتونون بنشوة اللحظة
          الهائمون في رغباتهم فلا يدركون ما يعقبها من الألم والأسي المحتم،
          واللوم كذلك يشمل هؤلاء الذين أخفقوا في واجباتهم نتيجة لضعف إرادتهم
          فيتساوي مع هؤلاء الذين يتجنبون وينأون عن تحمل الكدح والألم .
        </Text>
      </div>
    </div>
  );
};
